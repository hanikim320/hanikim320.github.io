(function(){
  const QUESTIONS = [
    { id: 1, text: "나는 외모나 옷차림이 깔끔하지 않은 사람을 보면 신뢰가 덜 간다.", domain: "외모 편견" },
    { id: 2, text: "피부나 체형이 사회 기준과 다르면 관리가 부족하다고 느낀다.", domain: "외모 편견" },
    { id: 3, text: "첫인상이 좋지 않으면 그 사람의 성격도 별로일 것 같다.", domain: "외모 편견" },
    { id: 4, text: "특정 지역 사람들은 성격이 급하거나 거칠다고 생각한다.", domain: "출신 지역 편견" },
    { id: 5, text: "내가 사는 지역이 다른 지역보다 더 살기 좋다고 느낀다.", domain: "출신 지역 편견" },
    { id: 6, text: "방언을 쓰는 사람을 보면 촌스럽다고 느낀 적이 있다.", domain: "출신 지역 편견" },
    { id: 7, text: "육체노동은 공부를 덜 한 사람들이 하는 일이라고 생각한다.", domain: "직업 편견" },
    { id: 8, text: "유명 직업을 가진 사람은 인격적으로도 뛰어날 것이라 생각한다.", domain: "직업 편견" },
    { id: 9, text: "알바나 단순 노동을 하는 사람에게 무의식적으로 반말을 한 적이 있다.", domain: "직업 편견" },
    { id: 10, text: "남자는 여자보다 감정 표현을 덜 해야 한다고 생각한다.", domain: "성별 편견" },
    { id: 11, text: "여자는 남자보다 감성적이고, 리더십에는 약하다고 느낀다.", domain: "성별 편견" },
    { id: 12, text: "집안일은 여자 쪽이 더 잘해야 한다고 생각한 적이 있다.", domain: "성별 편견" },
    { id: 13, text: "식사할 때 손으로 밥을 먹는 것은 위생적이지 않다고 느낀다.", domain: "문화 편견" },
    { id: 14, text: "내 나라 문화가 다른 나라 문화보다 예의 바르다고 생각한다.", domain: "문화 편견" },
    { id: 15, text: "낯선 복장이나 종교적 의상을 보면 어색하거나 불편하다.", domain: "문화 편견" },
    { id: 16, text: "피부색이 어두운 사람을 보면 본능적으로 경계심이 든다.", domain: "인종 편견" },
    { id: 17, text: "백인이나 서양인은 더 세련되었다는 생각이 든 적이 있다.", domain: "인종 편견" },
    { id: 18, text: "다른 인종의 사람과 짝을 이루면 살짝 부담스럽다.", domain: "인종 편견" },
    { id: 19, text: "나와 다른 종교를 믿는 사람의 신앙 방식이 이상하게 느껴진다.", domain: "종교 편견" },
    { id: 20, text: "종교가 있는 사람은 비이성적일 것 같다고 생각한다.", domain: "종교 편견" },
    { id: 21, text: "특정 종교의 상징물(십자가, 히잡 등)을 보면 불편하게 느껴진다.", domain: "종교 편견" },
    { id: 22, text: "장애가 있는 친구와 함께 활동하면 불편할 것 같다.", domain: "장애 편견" },
    { id: 23, text: "장애가 있으면 대부분 도움을 받아야만 한다고 생각한다.", domain: "장애 편견" },
    { id: 24, text: "장애 학생이 수업 참여 시 방해될까 걱정한 적이 있다.", domain: "장애 편견" },
    { id: 25, text: "경제적으로 어려운 사람은 노력하지 않아서 그런 것이라고 생각한다.", domain: "경제 편견" },
    { id: 26, text: "브랜드 옷을 입은 사람은 부유하고 성취한 사람 같다고 느낀다.", domain: "경제 편견" },
    { id: 27, text: "가난한 사람을 보면 불쌍하지만 어느 정도는 자기 탓이라 생각한다.", domain: "경제 편견" },
    { id: 28, text: "나와 비슷한 배경을 가진 사람과 있을 때 가장 편안하다.", domain: "내집단 중심성" },
    { id: 29, text: "새로운 친구보다는 기존 친구들과 어울리는 게 더 좋다.", domain: "내집단 중심성" },
    { id: 30, text: "나와 생각이 너무 다른 사람과 대화하면 피곤하다.", domain: "내집단 중심성" }
  ];
  const LIKERT = [
    { value: 1, label: "① 전혀 그렇지 않다" },
    { value: 2, label: "② 그렇지 않다" },
    { value: 3, label: "③ 보통이다" },
    { value: 4, label: "④ 그렇다" },
    { value: 5, label: "⑤ 매우 그렇다" }
  ];
  const SUGGEST = {
    "외모 편견": "외형 대신 구체적 행동 근거로 칭찬하기(하루 1회).",
    "출신 지역 편견": "지역 고정관념을 데이터/사례로 반박해보기.",
    "직업 편견": "직업=임금이 아니라 '사회적 기여' 관점으로 보기.",
    "성별 편견": "감정 어휘 5개를 오늘 대화에서 사용해보기.",
    "문화 편견": "낯선 예절의 맥락을 찾아 장점 1개 기록하기.",
    "인종 편견": "낯섦을 호기심 질문 1개로 바꾸기.",
    "종교 편견": "서로 다른 종교의 공통 가치 1개 적기.",
    "장애 편견": "'불편'→'무엇이 필요할까?'로 전환, 합리적 배려 체크.",
    "경제 편견": "빈곤의 구조적 요인/정책 1개 조사하기.",
    "내집단 중심성": "의도적으로 낯선 짝과 인터뷰 후 공통점 3가지 찾기."
  };

  const KEY = "bias-answers-csp-v1";
  let answers = {};
  try { answers = JSON.parse(localStorage.getItem(KEY)) || {}; } catch(e){ answers = {}; }
  function save(){ try { localStorage.setItem(KEY, JSON.stringify(answers)); } catch(e){} }

  function el(tag, attrs={}, children=[]){
    const x = document.createElement(tag);
    for (const [k,v] of Object.entries(attrs)){
      if (k === "class") x.className = v;
      else if (k === "html") x.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") x.addEventListener(k.substring(2), v);
      else x.setAttribute(k, v);
    }
    (Array.isArray(children)?children:[children]).forEach(c=>{ if (c!=null) x.appendChild(typeof c==="string"?document.createTextNode(c):c); });
    return x;
  }

  function render(){
    const answered = Object.keys(answers).length;
    const pct = Math.round(answered/QUESTIONS.length*100);
    document.getElementById("progLabel").textContent = pct + "%";
    document.getElementById("countLabel").textContent = answered;
    document.getElementById("progBar").style.width = pct + "%";

    const allDone = answered === QUESTIONS.length;
    document.getElementById("printBtn").disabled = !allDone;

    const scoreSlot = document.getElementById("scoreSlot");
    if (allDone){
      const total = QUESTIONS.reduce((s,q)=> s + (answers[q.id] || 0), 0);
      const max = QUESTIONS.length*5;
      const ratio = Math.round(total/max*100);
      let tier = "열린 마음형", color = "var(--good)";
      if (ratio >= 60){ tier="잠재적 편견 주의형"; color="var(--bad)"; }
      else if (ratio >= 35){ tier="성찰 중간형"; color="var(--warn)"; }
      scoreSlot.innerHTML = `<span class="badge" style="border-color:${color}; color:${color}">${tier}<span class="muted">(${total}/${max}, ${ratio}%)</span></span>`;
    } else {
      scoreSlot.textContent = "모든 문항 응답 후 결과가 공개됩니다.";
    }

    const chartSlot = document.getElementById("chartSlot");
    const summaryMount = document.getElementById("summaryMount");
    chartSlot.innerHTML = ""; summaryMount.innerHTML = "";
    if (!allDone){
      chartSlot.textContent = "모든 문항을 응답하면 그래프가 나타납니다.";
      const hold = el("article", {class:"card muted"}, "결과는 모든 문항에 응답한 뒤 확인할 수 있습니다.");
      summaryMount.appendChild(hold);
    } else {
      const map = new Map();
      for (const q of QUESTIONS){
        const prev = map.get(q.domain) || { sum:0, cnt:0 };
        map.set(q.domain, { sum: prev.sum + (answers[q.id] || 0), cnt: prev.cnt + 1 });
      }
      const data = Array.from(map.entries()).map(([domain, {sum,cnt}])=>{
        const max = cnt*5, pct = Math.round(sum/max*100), avg = +(sum/cnt).toFixed(1);
        return { domain, sum, cnt, max, pct, avg };
      }).sort((a,b)=>b.pct-a.pct);

      const chart = el("div", {class:"chart"});
      data.forEach(d=>{
        const bar = el("div", {class:"bar"}, [
          el("div", {class:"barlabel"}, d.domain),
          el("div", {class:"bartrack"}, el("div", {class:"barfill", style:`width:${d.pct}%;`}))
        ]);
        chart.appendChild(bar);
      });
      chartSlot.appendChild(chart);

      const sumWrap = el("section", {class:"grid"});
      const left = el("article",{class:"card"}, [
        el("div",{class:"h5"}, "영역별 요약"),
        el("div",{}, data.map(d=> el("div",{class:"pair"},[ el("span",{}, d.domain), el("small",{class:"muted"}, `${d.sum}/${d.max}점 (${d.pct}%) · 평균 ${d.avg}`) ])))
      ]);
      const right = el("article",{class:"card"}, [
        el("div",{class:"h5"}, "바로 실천할 작은 행동"),
        el("ul",{}, data.slice(0,3).map(d=> el("li",{}, `• ${d.domain}: ${SUGGEST[d.domain]||""}`))),
        el("small",{class:"muted"}, "* 상위 3개 영역을 기준으로 자동 제안됩니다.")
      ]);
      sumWrap.append(left); sumWrap.append(right);
      summaryMount.appendChild(sumWrap);
    }
  }

  function mountQuestions(){
    const mount = document.getElementById("qMount");
    mount.innerHTML = "";
    const grid = el("div",{class:"grid"}); mount.appendChild(grid);
    QUESTIONS.forEach(q=>{
      const card = el("article",{class:"card"});
      const head = el("div",{class:"qtitle"},[
        el("div",{}, `${q.id}. ${q.text}`),
        el("span",{class:"pill"}, q.domain)
      ]);
      const opts = el("div",{class:"qgrid"});
      LIKERT.forEach(opt=>{
        const lab = el("label",{class:"opt"+(answers[q.id]===opt.value?" active":""), for:`q${q.id}_${opt.value}`});
        const input = el("input", {type:"radio", name:`q${q.id}`, id:`q${q.id}_${opt.value}`, value:String(opt.value)});
        input.checked = answers[q.id]===opt.value;
        input.addEventListener("change", ()=>{ answers[q.id]=opt.value; save(); render(); mountQuestions(); });
        lab.appendChild(input); lab.appendChild(el("span",{}, opt.label));
        opts.appendChild(lab);
      });
      card.appendChild(head); card.appendChild(opts); grid.appendChild(card);
    });
  }

  document.getElementById("printBtn").addEventListener("click", ()=> window.print());
  document.getElementById("resetBtn").addEventListener("click", ()=>{
    if (confirm("모든 응답을 초기화할까요?")){
      answers={}; save(); render(); mountQuestions(); window.scrollTo({top:0, behavior:"smooth"});
    }
  });
  document.getElementById("revealBtn").addEventListener("click", ()=>{
    const first = QUESTIONS.find(q=> !answers[q.id]);
    if (first){
      const elx = document.getElementById(`q${first.id}_1`);
      if (elx) elx.scrollIntoView({behavior:"smooth", block:"center"});
      const hint = document.getElementById("revealHint");
      if (hint){ hint.textContent = "미응답 문항부터 선택해 주세요."; setTimeout(()=> hint.textContent="", 4000); }
    }
  });

  // Initial paint
  mountQuestions(); render();
})();