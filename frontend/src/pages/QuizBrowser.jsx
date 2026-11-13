import { useMemo } from "react";
import { listQuizSubjects } from "../contentStore";
import { makeScope, getSubjectStats, getSubjectTotals } from "../subjectQuizStore";
import { ProgressCircle } from "../components/QuizShared";
import { Crumb, ListRow, EmptyState } from "../components/NavParts";
import SubjectDashboard from "./SubjectDashboard";
import { IS_DEV } from "../env";

// Quiz: Subject list -> Topic list -> the quiz for that topic.
export default function QuizBrowser({ nav, setNav }) {
  const subjects = useMemo(() => listQuizSubjects(), []);
  const subject = subjects.find((s) => s.id === nav.subjectId) || null;
  const topic = subject?.topics.find((t) => t.id === nav.topicId) || null;

  if (subjects.length === 0) {
    return (
      <EmptyState
        icon="📝"
        title="No quiz questions yet."
        hint={IS_DEV ? "Import some in the 🛠 Dev tab (bottom right)." : "Check back soon."}
      />
    );
  }

  if (!subject) {
    return (
      <div className="mx-auto max-w-2xl space-y-3 p-4">
        {subjects.map((s) => {
          const t = getSubjectTotals(s.id, s.topics.map((x) => x.id));
          return (
            <ListRow
              key={s.id}
              left={<ProgressCircle progress={t.percentAnswered} size={44} strokeWidth={5} />}
              title={s.label}
              subtitle={`${s.topics.length} topic${s.topics.length !== 1 ? "s" : ""} · ${t.answeredCount}/${t.total} answered`}
              onClick={() => setNav({ subjectId: s.id, topicId: null })}
            />
          );
        })}
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="mx-auto max-w-2xl p-4">
        <Crumb onBack={() => setNav({ subjectId: null, topicId: null })} title={subject.label} subtitle={`${subject.topics.length} topic${subject.topics.length !== 1 ? "s" : ""}`} />
        <div className="space-y-3">
          {subject.topics.map((t) => {
            const st = getSubjectStats(makeScope(subject.id, t.id));
            return (
              <ListRow
                key={t.id}
                left={<ProgressCircle progress={st.percentAnswered} size={44} strokeWidth={5} />}
                title={t.label}
                subtitle={`${st.answeredCount}/${st.total} answered`}
                onClick={() => setNav({ subjectId: subject.id, topicId: t.id })}
              />
            );
          })}
        </div>
      </div>
    );
  }

  const scope = makeScope(subject.id, topic.id);
  return (
    <div className="mx-auto max-w-2xl px-4 pt-4">
      <Crumb onBack={() => setNav({ subjectId: subject.id, topicId: null })} title={topic.label} subtitle={subject.label} />
      <SubjectDashboard key={scope} subjectId={scope} subjectLabel={topic.label} />
    </div>
  );
}
