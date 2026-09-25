"use client";

import { ArrowLeft, RotateCcw, RotateCw, Shuffle } from "lucide-react";
import { useState } from "react";

type WheelEntry = {
  id: number;
  name: string;
};

type Question = {
  id: number;
  title: string;
  prompt: string;
  options: Record<"A" | "B" | "C" | "D", string>;
  answer: "A" | "B" | "C" | "D";
};

const allEntries: WheelEntry[] = [
  { id: 1, name: "Hoa Minh" },
  { id: 2, name: "Nhật Đạo" },
  { id: 3, name: "An Khánh" },
  { id: 4, name: "Vạn Liễu" },
  { id: 5, name: "Giới Hòa" },
  { id: 6, name: "Liên Phúc" },
  { id: 7, name: "Uyển Khánh" },
  { id: 8, name: "An Lai" },
  { id: 9, name: "Minh Tuệ" },
  { id: 10, name: "Quảng Thuận" },
  { id: 11, name: "Thuận Hiền" },
  { id: 12, name: "Chúc Khương" },
  { id: 13, name: "Hạnh Tuyên" },
  { id: 14, name: "Đức Đạo" },
  { id: 15, name: "Đức Niệm" },
  { id: 16, name: "Chúc Pháp" },
  { id: 17, name: "Hạnh Khiêm" },
  { id: 18, name: "Thánh Nhã" },
  { id: 19, name: "Nhuận Liên" },
  { id: 20, name: "Chúc Thọ" },
  { id: 21, name: "Khánh Nhẫn" },
  { id: 22, name: "Thể Quang" },
  { id: 23, name: "Hạnh Mẫn" },
  { id: 24, name: "Minh Giác Minh Mẫn" },
  { id: 25, name: "Nguyên Đạo" },
  { id: 26, name: "Quảng Đạo" },
  { id: 27, name: "Quảng Trí" },
  { id: 28, name: "Tịnh Ngọc" },
  { id: 29, name: "Chúc Phước" },
  { id: 30, name: "Pháp Hiếu" },
  { id: 31, name: "Trí Minh" },
  { id: 32, name: "Thiện Hỷ" },
  { id: 33, name: "Thuận Tài" },
  { id: 34, name: "Quảng Hương" },
  { id: 35, name: "Đức Sanh" },
  { id: 36, name: "Quảng Trí" },
  { id: 37, name: "Liên Tuệ" },
  { id: 38, name: "Quảng Tường" },
  { id: 39, name: "Phước Vĩnh" },
  { id: 40, name: "Giác Đức" },
  { id: 41, name: "Liên Thuần" },
  { id: 42, name: "Đức Bảo" },
  { id: 43, name: "Nguyên Hồi" },
  { id: 44, name: "Diệu Tựu" },
  { id: 45, name: "Huệ Hòa" },
  { id: 46, name: "Quảng Phước" },
  { id: 47, name: "Chân Mỹ" },
  { id: 48, name: "Hiền Vy" },
  { id: 49, name: "Nguyên Tánh" },
  { id: 50, name: "Nhuận Trí" },
  { id: 51, name: "Đạo Ly" },
  { id: 52, name: "Phước Tường" },
  { id: 53, name: "Minh Thiện" },
  { id: 54, name: "Đức Hưng" },
  { id: 55, name: "Nhuận Quý" },
  { id: 56, name: "Diệu Hướng" },
  { id: 57, name: "Hạnh Lâm" },
  { id: 58, name: "Đạt Ma Thật Khang" },
  { id: 59, name: "Quảng Tâm" },
  { id: 60, name: "Liên Tuệ" },
  { id: 61, name: "Hạnh Nhẫn" },
  { id: 62, name: "Nhuận Bảo" },
  { id: 63, name: "Nhuận Viên" },
  { id: 64, name: "Liên Xuân" },
  { id: 65, name: "Thiện Bảo" },
];

const excludedNames = new Set([
  "Thánh Nhã",
  "Phước Tường",
  "Quảng Trí",
  "Quảng Phước",
  "Đạo Ly",
  "Đức Hưng",
]);

const wheelEntries = allEntries.filter((entry) => !excludedNames.has(entry.name));

const questions: Question[] = [
  {
    id: 1,
    title: "Gói 1",
    prompt: "Nguyễn Đình Chiểu sinh và mất vào thời gian nào?",
    options: {
      A: "1820 - 1885",
      B: "1822 - 1888",
      C: "1825 - 1890",
      D: "1830 - 1888",
    },
    answer: "B",
  },
  {
    id: 2,
    title: "Gói 2",
    prompt:
      "Tác phẩm nào của Nguyễn Đình Chiểu ca ngợi những người nông dân nghĩa sĩ đã hy sinh chống thực dân Pháp?",
    options: {
      A: "Dương Từ - Hà Mậu",
      B: "Ngư Tiều Y Thuật Vấn Đáp",
      C: "Văn tế nghĩa sĩ Cần Giuộc",
      D: "Lục Vân Tiên",
    },
    answer: "C",
  },
  {
    id: 4,
    title: "Gói 4",
    prompt:
      "Quan niệm văn chương nổi bật của Nguyễn Đình Chiểu có thể khái quát bằng tư tưởng nào?",
    options: {
      A: "Văn chương chỉ nhằm mục đích giải trí",
      B: "Nghệ thuật vị nghệ thuật",
      C: "Văn dĩ tải đạo - dùng văn chương để truyền tải đạo lí",
      D: "Văn chương phải hoàn toàn tách khỏi đời sống",
    },
    answer: "C",
  },
  {
    id: 5,
    title: "Gói 5",
    prompt: "Biến cố lớn nào khiến cuộc đời Nguyễn Đình Chiểu rẽ sang một hướng khác?",
    options: {
      A: "Thi đỗ nhưng không ra làm quan",
      B: "Bị mù sau khi về chịu tang mẹ",
      C: "Bị bắt đi lính",
      D: "Gia đình chuyển vào Nam",
    },
    answer: "B",
  },
  {
    id: 6,
    title: "Gói 6",
    prompt: "Điều làm nên giá trị đặc biệt trong nghị lực sống của Nguyễn Đình Chiểu là gì?",
    options: {
      A: "Ông vượt qua nghịch cảnh để tiếp tục con đường công danh",
      B: "Ông biến bất hạnh cá nhân thành động lực để sống có ích cho đời",
      C: "Ông từ bỏ khoa cử để chuyên tâm nghiên cứu văn chương",
      D: "Ông chọn sống ẩn dật để giữ gìn khí tiết",
    },
    answer: "B",
  },
  {
    id: 7,
    title: "Gói 7",
    prompt: "Điểm gặp gỡ giữa cuộc đời Nguyễn Đình Chiểu và hình tượng Lục Vân Tiên là gì?",
    options: {
      A: "Cả hai đều có cuộc đời hoàn toàn thuận lợi",
      B: "Cả hai đều dùng võ nghệ để cứu giúp người khác",
      C: "Đều thể hiện lí tưởng sống trọng nghĩa, coi hành động đạo đức quan trọng hơn lợi ích cá nhân",
      D: "Đều từ bỏ công danh vì không gặp thời",
    },
    answer: "C",
  },
  {
    id: 8,
    title: "Gói 8",
    prompt: "Vì sao Lục Vân Tiên có sức sống lâu bền trong đời sống nhân dân?",
    options: {
      A: "Vì cốt truyện nhiều biến cố và hấp dẫn",
      B: "Vì tác phẩm có nhiều nhân vật chính diện rõ nét",
      C: "Vì những chuẩn mực nhân nghĩa trong tác phẩm gần gũi với quan niệm sống của nhân dân",
      D: "Vì tác phẩm có ngôn ngữ bình dân, dễ nhớ",
    },
    answer: "C",
  },
  {
    id: 9,
    title: "Gói 9",
    prompt: "Điểm chung cốt lõi nhất giữa Lục Vân Tiên và Kiều Nguyệt Nga là gì?",
    options: {
      A: "Đều là những con người được lí tưởng hóa",
      B: "Đều có số phận nhiều thử thách",
      C: "Đều đặt đạo nghĩa lên trên lợi ích cá nhân",
      D: "Đều được xây dựng theo khuôn mẫu nhân vật truyền thống",
    },
    answer: "C",
  },
  {
    id: 10,
    title: "Gói 10",
    prompt:
      "Điều nào giúp Nguyễn Đình Chiểu trở thành một “nhân cách lớn”, chứ không chỉ là một “tài năng lớn”?",
    options: {
      A: "Số lượng tác phẩm nhiều",
      B: "Sự nhất quán giữa đạo lí ông viết, cách ông sống và thái độ trước vận mệnh dân tộc",
      C: "Ông nổi tiếng từ khi còn trẻ",
      D: "Ông có kiến thức Nho học sâu rộng",
    },
    answer: "B",
  },
];

const questionSlots = Array.from({ length: 10 }, (_, index) => {
  const id = index + 1;
  return questions.find((question) => question.id === id) ?? null;
});

const colors = [
  "#ee6352",
  "#59a96a",
  "#3d8bfd",
  "#f6ae2d",
  "#7c5cff",
  "#14b8a6",
  "#e76f51",
  "#457b9d",
];

function randomIndex(max: number) {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return values[0] % max;
}

function pointOnCircle(angle: number, radius: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(radians),
    y: 50 + radius * Math.sin(radians),
  };
}

function segmentPath(index: number, total: number) {
  const step = 360 / total;
  const startAngle = index * step - 90;
  const endAngle = (index + 1) * step - 90;
  const start = pointOnCircle(startAngle + 90, 49);
  const end = pointOnCircle(endAngle + 90, 49);
  const largeArc = step > 180 ? 1 : 0;

  return `M 50 50 L ${start.x.toFixed(3)} ${start.y.toFixed(3)} A 49 49 0 ${largeArc} 1 ${end.x.toFixed(3)} ${end.y.toFixed(3)} Z`;
}

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [selectedEntry, setSelectedEntry] = useState<WheelEntry | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  const [openedQuestionIds, setOpenedQuestionIds] = useState<Set<number>>(new Set());
  const [isSpinning, setIsSpinning] = useState(false);

  const segmentAngle = 360 / wheelEntries.length;
  const availableQuestions = questions.filter((question) => !openedQuestionIds.has(question.id));

  function spinWheel() {
    if (isSpinning) return;

    const index = randomIndex(wheelEntries.length);
    const entry = wheelEntries[index];
    const targetAngle = index * segmentAngle + segmentAngle / 2;
    const rounds = 7 + randomIndex(4);
    const nextRotation = rotation + rounds * 360 + (360 - targetAngle);

    setIsSpinning(true);
    setSelectedEntry(null);
    setSelectedQuestion(null);
    setChosenAnswer(null);
    setRotation(nextRotation);

    window.setTimeout(() => {
      setSelectedEntry(entry);
      setIsSpinning(false);
    }, 4300);
  }

  function pickQuestion(question: Question | null) {
    if (!question) return;
    if (openedQuestionIds.has(question.id)) return;
    setSelectedQuestion(question);
    setChosenAnswer(null);
    setOpenedQuestionIds((current) => {
      const next = new Set(current);
      next.add(question.id);
      return next;
    });
  }

  function randomQuestion() {
    if (availableQuestions.length === 0) return;
    const question = availableQuestions[randomIndex(availableQuestions.length)];
    pickQuestion(question);
  }

  function resetRound() {
    setSelectedEntry(null);
    setSelectedQuestion(null);
    setChosenAnswer(null);
  }

  return (
    <main className={selectedEntry && !isSpinning ? "page-shell overlay-open" : "page-shell"}>
      <section className="wheel-stage" aria-labelledby="main-title">
        <div className="stage-header">
          <div>
            <h1 id="main-title">Vòng quay may mắn</h1>
          </div>
          <div className="stage-count">
            <span>Số pháp danh</span>
            <strong>{wheelEntries.length}</strong>
          </div>
        </div>

        <div className="wheel-wrap">
          <div className="pointer" aria-hidden="true" />
          <div
            className="wheel"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <svg className="wheel-svg" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <filter id="name-shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0.6" stdDeviation="0.7" floodOpacity="0.55" />
                </filter>
              </defs>
              {wheelEntries.map((entry, index) => {
                const angle = index * segmentAngle + segmentAngle / 2;
                const isFlipped = angle > 90 && angle < 270;
                const textY = index % 2 === 0 ? 11.5 : 19;
                const fittedLength = Math.min(34, Math.max(12, entry.name.length * 1.45));

                return (
                  <g key={`${entry.id}-${entry.name}-${index}`}>
                    <path
                      className="wheel-segment"
                      d={segmentPath(index, wheelEntries.length)}
                      fill={colors[index % colors.length]}
                    />
                    <g transform={`rotate(${angle} 50 50)`}>
                      <text
                        className="wheel-name"
                        filter="url(#name-shadow)"
                        lengthAdjust="spacingAndGlyphs"
                        textAnchor="middle"
                        textLength={fittedLength}
                        transform={`rotate(${isFlipped ? -90 : 90} 50 ${textY})`}
                        x="50"
                        y={textY}
                      >
                        {entry.name}
                      </text>
                    </g>
                  </g>
                );
              })}
              <circle className="wheel-ring" cx="50" cy="50" r="40.5" />
              <circle className="wheel-ring inner" cx="50" cy="50" r="24" />
            </svg>
            <div className="wheel-center">
              <button
                aria-label="Quay vòng"
                className="wheel-spin-button"
                disabled={isSpinning}
                onClick={spinWheel}
                title="Quay vòng"
              >
                <RotateCw size={54} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedEntry && !isSpinning ? (
        <section className="game-overlay" aria-labelledby="question-title">
          <div className={`overlay-card ${selectedQuestion ? "question-mode" : ""}`}>
            <div className="overlay-header">
              <div>
                <p className="eyebrow">Pháp danh được chọn</p>
                <h2>{selectedEntry.name}</h2>
              </div>
              <button className="ghost-action compact" onClick={resetRound}>
                <RotateCcw size={19} />
                Lượt mới
              </button>
            </div>

            {!selectedQuestion ? (
              <>
                <div className="question-toolbar">
                  <div>
                    <p className="eyebrow">Bước tiếp theo</p>
                    <h3 id="question-title">Chọn 1 trong 10 gói câu hỏi</h3>
                  </div>
                  <button
                    className="secondary-action"
                    disabled={availableQuestions.length === 0}
                    onClick={randomQuestion}
                  >
                    <Shuffle size={18} />
                    {availableQuestions.length > 0 ? "Random gói" : "Hết gói"}
                  </button>
                </div>

                <div className="question-grid">
                  {questionSlots.map((question, index) => {
                    const slotNumber = index + 1;
                    const isOpened = question ? openedQuestionIds.has(question.id) : false;

                    return (
                      <button
                        className={`question-card ${isOpened ? "opened" : ""}`}
                        disabled={!question || isOpened}
                        key={slotNumber}
                        onClick={() => pickQuestion(question)}
                        title={
                          !question
                            ? "Chưa có dữ liệu câu hỏi số 3"
                            : isOpened
                              ? "Gói này đã được mở"
                              : question.prompt
                        }
                      >
                        <span>Gói {slotNumber}</span>
                        <strong>{question ? (isOpened ? "Đã mở" : "Mở câu hỏi") : "Thiếu câu 3"}</strong>
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <article className="answer-board">
                <button className="back-action" onClick={() => setSelectedQuestion(null)}>
                  <ArrowLeft size={19} />
                  Chọn gói khác
                </button>

                <div className="question-copy">
                  <span>{selectedQuestion.title}</span>
                  <h3>{selectedQuestion.prompt}</h3>
                </div>

                <div className="answer-options">
                  {(Object.keys(selectedQuestion.options) as Array<keyof Question["options"]>).map(
                    (key) => {
                      const isChosen = chosenAnswer === key;
                      const isCorrect = selectedQuestion.answer === key;
                      const reveal = chosenAnswer !== null;

                      return (
                        <button
                          className={[
                            "answer-option",
                            reveal && isCorrect ? "correct" : "",
                            reveal && isChosen && !isCorrect ? "wrong" : "",
                          ].join(" ")}
                          key={key}
                          onClick={() => setChosenAnswer(key)}
                        >
                          <span>{key}</span>
                          <strong>{selectedQuestion.options[key]}</strong>
                        </button>
                      );
                    },
                  )}
                </div>

                {chosenAnswer ? (
                  <div className="answer-result">
                    Đáp án đúng: <strong>{selectedQuestion.answer}</strong>
                  </div>
                ) : null}
              </article>
            )}
          </div>
        </section>
      ) : null}
    </main>
  );
}
