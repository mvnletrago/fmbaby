const quizzes = {
    1: {
        title: "Goodluck babyy Muahh",
        questions: [
            // Original 44 questions here...
            { q:"Which of the following best defines the business environment?", choices:{A:"The internal management style of a company",B:"External political, economic, social, technological, legal, and competitive factors affecting a business",C:"MadrOnly the economic factors impacting business",D:"RomThe products and services a business offers"}, answer:"B" },
            { q:"Which of the following is an internal factor of the business environment?", choices:{A:"Ea. Government regulations",B:"MOrganizational culture",C:"JupiteClimate changer",D:"VenTrade tariffsus"}, answer:"B" },
            { q:"How many continents existWhich PESTLE factor is concerned with interest rates, inflation, and GDP??", choices:{A:"Political",B:"Economic",C:"Sociocultural",D:"Technological"}, answer:"B" },
            { q:"Population size, cultural trends, and demographics fall under which business environment category?", choices:{A:"Technological factors",B:"Legal factors",C:"Sociocultural factors",D:"Environmental factors"}, answer:"C" },
            { q:"Which form of business organization is owned and operated by a single individual?", choices:{A:"Partnership",B:"Corporation",C:"Sole proprietorship",D:"Cooperative"}, answer:"C" },
            { q:"What is a key advantage of a corporation compared to a sole proprietorship?", choices:{A:"Unlimited liability",B:"Limited liability",C:"Full personal control",D:"Simple formation process"}, answer:"B" },
            { q:"In a partnership, who is responsible for the business’s debts in a general partnership?", choices:{A:"Only limited partners",B:"All partners",C:"Only shareholders",D:"Only employees"}, answer:"B" },
            { q:"Which business form allows for both limited liability and flexible management with pass-through taxation", choices:{A:"Sole proprietorship",B:"Corporation",C:"Cooperative",D:"Limited Liability Company (LLC)"}, answer:"D" },
            { q:"Which of the following is considered an external environmental factor?", choices:{A:"Employees’ skills",B:"Management structure",C:"Legal regulations",D:"Organizational culture"}, answer:"C" },
            { q:"Which factor is most relevant for businesses dependent on imports and exports?", choices:{A:"Natural environment",B:"International environment",C:"Internal environment",D:"Sociocultural environment"}, answer:"B" },
            { q:"Which of the following best describes the planning function in management?", choices:{A:"Setting objectives and deciding how to achieve them",B:"Monitoring and correcting deviations from standards",C:"Supervising employees to complete tasks",D:"Organizing tasks and allocating resources"}, answer:"A" },
            { q:"What is the primary focus of the organizing function?", choices:{A:"Measuring employee performance",B:"Structuring resources, tasks, and people to achieve goals",C:"Motivating employees to perform efficiently",D:"Evaluating team dynamics"}, answer:"B" },
            { q:"Staffing in an organization involves:", choices:{A:". Assigning work to employees based on skill",B:"Making strategic decisions for the organization",C:"Controlling and measuring performance",D:"Recruiting, developing, and retaining employees"}, answer:"D" },
            { q:"Which leadership style focuses on inspiring and motivating team members through a shared vision?", choices:{A:"Autocratic",B:"Transactional",C:"Transformational",D:"Laissez-faire"}, answer:"C" },
            { q:"What is the main purpose of the controlling function in management?", choices:{A:"Allocating resources for projects",B:". Monitoring performance and taking corrective actions",C:"Planning short-term and long-term goals",D:"Motivating employees through rewards"}, answer:"B" },
            { q:"Which of the following is a principle of effective communication?", choices:{A:"Coherence",B:"Ambiguity",C:"Generalization",D:"Repetition of irrelevant details"}, answer:"A" },
            { q:"Which of the following is a characteristic of effective planning in management?", choices:{A:"Flexibility",B:"Micromanagement",C:"Avoiding stakeholder input",D:"Ignoring resources"}, answer:"A" },
            { q:"Which stage of team development is characterized by interpersonal conflicts and struggles for leadership?", choices:{A:"Forming",B:"Storming",C:"Norming",D:"Performing"}, answer:"B" },
            { q:"What is the primary role of a manager in the directing function?", choices:{A:"Setting objectives",B:"Allocating resources",C:"Motivating and supervising employees",D:"Measuring performance"}, answer:"C" },
            { q:"Which leadership style allows team members high autonomy in decision-making?", choices:{A:"Democratic",B:"Autocratic",C:"Laissez-faire",D:"Transformational"}, answer:"C" },
            { q:"Which of the following is NOT an external factor of the business environment?", choices:{A:"Organizational culture",B:"Legal regulations",C:"Economic trends",D:"Technological developments"}, answer:"A" },
            { q:"What does SMART stand for in setting objectives?", choices:{A:"Specific, Measurable, Achievable, Relevant, Time-bound",B:"Simple, Meaningful, Accurate, Reliable, Timely",C:"Strategic, Motivated, Actionable, Realistic, Tested",D:"Sensible, Manageable, Action-oriented, Result-focused, Time-limited"}, answer:"A" },
            { q:"During the norming stage of team development, what is a key focus?", choices:{A:"Resolving conflicts and building trust",B:"Completing individual tasks without collaboration",C:"Experiencing confusion about purpose",D:"Ending the project"}, answer:"A" },
            { q:"Which type of communication involves facial expressions, gestures, and body posture?", choices:{A:"Verbal communication",B:"Written communication",C:"Nonverbal communication",D:"Digital communication"}, answer:"C" },
            { q:"In decision-making, what is the main purpose of evaluating alternatives?", choices:{A:"To randomly choose an option",B:"To select the best course of action to achieve objectives",C:"To avoid accountability",D:"To delay the process"}, answer:"B" },
            { q:"Which of the following is a benefit of effective employee communication?", choices:{A:"Improves morale and teamwork",B:"Increases confusion about responsibilities",C:"Reduces transparency",D:"Encourages isolated work"}, answer:"A" },
            { q:"Which type of decision involves day-to-day activities like scheduling staff or ordering supplies?", choices:{A:"Strategic",B:"Tactical",C:"Operational",D:"Financial"}, answer:"C" },
            { q:"A tactical decision example would be:", choices:{A:"Launching a new product next year",B:"Deciding how marketing campaigns will run this quarter",C:"Merging with a competitor",D:"Hiring a CEO"}, answer:"B" },
            { q:"Which decision-making model relies heavily on experience and intuition?", choices:{A:"Rational",B:"Bounded rationality",C:"Intuitive",D:"Creative"}, answer:"C" },
            { q:"Which tool evaluates whether a project is worth pursuing by comparing costs and benefits?", choices:{A:"SWOT Analysis",B:"Cost-Benefit Analysis",C:"Market Research",D:"Feasibility Study"}, answer:"B" },
            { q:"What is the primary goal of marketing management?", choices:{A:"Maximizing employee satisfaction",B:"Getting, keeping, and growing customers",C:"Minimizing operational costs",D:"Issuing dividends"}, answer:"B" },
            { q:"Which of the following is part of the marketing mix?", choices:{A:"Promotion",B:"Budgeting",C:"Risk management",D:"Capital allocation"}, answer:"A" },
            { q:"Segmentation and targeting help a company:", choices:{A:"Reduce costs immediately",B:"Identify specific customer groups to focus marketing efforts",C:"Avoid competition",D:"Hire better employees"}, answer:"B" },
            { q:"A financial manager's role does NOT include:", choices:{A:"Fundraising",B:"Capital market operations",C:"Managing employee uniforms",D:"Profit planning"}, answer:"C" },
            { q:"Effective financial management contributes to success by:", choices:{A:"Allocating resources optimally",B:"Ignoring risks",C:"Delaying decisions",D:"Avoiding marketing"}, answer:"A" },
            { q:"Which of the following is an example of operational decision-making?", choices:{A:"Choosing to expand internationally",B:"Deciding which customer complaints to address today",C:"Planning a new product line strategy",D:"Merging with another company"}, answer:"B" },
            { q:"Which decision-making tool assesses internal strengths, weaknesses, opportunities, and threats?", choices:{A:"SWOT Analysis",B:"Cost-Benefit Analysis",C:"Feasibility Study",D:"Market Segmentation"}, answer:"A" },
            { q:"What is a key feature of operations management?", choices:{A:"Overseeing production and workflow",B:"Designing marketing campaigns",C:"Managing stockholder meetings",D:"Setting corporate dividend policy"}, answer:"A" },
            { q:"Which of the following is a primary function of the banking industry?", choices:{A:"Providing loans and deposits",B:"Marketing new products",C:"Managing employees’ schedules",D:"Production of goods"}, answer:"A" },
            { q:"A company wants to launch a new product and needs customer input. Which tool is most suitable?", choices:{A:"Market Research",B:"Financial Reporting",C:"Feasibility Study",D:"Six Sigma"}, answer:"A" },
            { q:"Which financial management activity ensures a company can meet short-term obligations?", choices:{A:"Capital budgeting",B:"Working capital management",C:"Risk management",D:"Strategic growth"}, answer:"B" },
            { q:"Cross-functional decision-making ensures:", choices:{A:"Coordination across different departments",B:"Only top-level managers decide",C:"Marketing ignores finance",D:"HR sets production schedules"}, answer:"A" },
            { q:"Which attribute of money ensures it can be easily carried and divided?", choices:{A:"Durable",B:"Portable",C:"Recognizable",D:"Stable"}, answer:"B" },
            { q:"Intuitive decisions are best used when:", choices:{A:"You have clear quantitative data",B:"Time pressure exists and experience guides choices",C:"Goals are fully clear and predictable",D:"Financial analysis is complete"}, answer:"B" },
            { q:"Which type of decision is concerned with long-term goals such as mergers or entering new markets?", choices:{A:"Strategic",B:"Tactical",C:"Operational",D:"Routine"}, answer:"A" },
            { q:"Who typically makes strategic decisions in an organization?", choices:{A:"Managers",B:"Employees",C:"Board of Directors",D:"Interns"}, answer:"C" },
            { q:"Which type of decision involves day-to-day activities like scheduling staff or ordering supplies?", choices:{A:"Strategic",B:"Tactical",C:"Operational",D:"Financial"}, answer:"C" },
            { q:"A tactical decision example would be:", choices:{A:"Launching a new product next year",B:"Deciding how marketing campaigns will run this quarter",C:"Merging with a competitor",D:"Hiring a CEO"}, answer:"B" },
            { q:"Which decision-making model relies heavily on experience and intuition?", choices:{A:"Rational",B:"Bounded rationality",C:"Intuitive",D:"Creative"}, answer:"C" },
            { q:"Which tool evaluates whether a project is worth pursuing by comparing costs and benefits?", choices:{A:"SWOT Analysis",B:"Cost-Benefit Analysis",C:"Market Research",D:"Feasibility Study"}, answer:"B" },
            { q:"What is the primary goal of marketing management?", choices:{A:"Maximizing employee satisfaction",B:"Getting, keeping, and growing customers",C:"Minimizing operational costs",D:"Issuing dividends"}, answer:"B" },
            { q:"Which of the following is part of the marketing mix?", choices:{A:"Promotion",B:"Budgeting",C:"Risk management",D:"Capital allocation"}, answer:"A" },
            { q:"Segmentation and targeting help a company:", choices:{A:"Reduce costs immediately",B:"Identify specific customer groups to focus marketing efforts",C:"Avoid competition",D:"Hire better employees"}, answer:"B" },
            { q:"A financial manager's role does NOT include:", choices:{A:"Fundraising",B:"Capital market operations",C:"Managing employee uniforms",D:"Profit planning"}, answer:"C" },
            { q:"Effective financial management contributes to success by:", choices:{A:"Allocating resources optimally",B:"Ignoring risks",C:"Delaying decisions",D:"Avoiding marketing"}, answer:"A" },
            { q:"Which of the following is an example of operational decision-making?", choices:{A:"Choosing to expand internationally",B:"Deciding which customer complaints to address today",C:"Planning a new product line strategy",D:"Merging with another company"}, answer:"B" },
            { q:"Which decision-making tool assesses internal strengths, weaknesses, opportunities, and threats?", choices:{A:"SWOT Analysis",B:"Cost-Benefit Analysis",C:"Feasibility Study",D:"Market Segmentation"}, answer:"A" },
            { q:"What is a key feature of operations management?", choices:{A:"Overseeing production and workflow",B:"Designing marketing campaigns",C:"Managing stockholder meetings",D:"Setting corporate dividend policy"}, answer:"A" },
            { q:"Which of the following is a primary function of the banking industry?", choices:{A:"Providing loans and deposits",B:"Marketing new products",C:"Managing employees’ schedules",D:"Production of goods"}, answer:"A" },
            { q:"A company wants to launch a new product and needs customer input. Which tool is most suitable?", choices:{A:"Market Research",B:"Financial Reporting",C:"Feasibility Study",D:"Six Sigma"}, answer:"A" }
        ]
    }
};

let currentQuiz = null;
let index = 0;
let score = 0;

/* OPEN QUIZ */
function openQuiz(quizID) {
    currentQuiz = quizzes[quizID];
    index = 0;
    score = 0;

    document.getElementById("homePage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";

    loadQuestion();
}

/* LOAD QUESTION */
function loadQuestion() {
    const q = currentQuiz.questions[index];

    document.getElementById("quizTitle").textContent = currentQuiz.title;
    document.getElementById("question").textContent = `${index + 1}. ${q.q}`;

    document.getElementById("choiceA").textContent = q.choices.A;
    document.getElementById("choiceB").textContent = q.choices.B;
    document.getElementById("choiceC").textContent = q.choices.C;
    document.getElementById("choiceD").textContent = q.choices.D;

    document.getElementById("quizForm").reset();
    document.getElementById("result").textContent = "";
}

/* CHECK ANSWER */
function checkAnswer() {
    const selected = document.querySelector("input[name='answer']:checked");
    
    if (!selected) {
        document.getElementById("result").textContent = "Select an answer!";
        document.getElementById("result").style.color = "red";
        return;
    }

    const correct = currentQuiz.questions[index].answer;

    if (selected.value === correct) {
        score++;
        document.getElementById("result").textContent = "Correct! 🎉";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").textContent = "Wrong ❌";
        document.getElementById("result").style.color = "red";
    }

    setTimeout(nextQuestion, 700);
}

/* NEXT QUESTION */
function nextQuestion() {
    index++;

    if (index < currentQuiz.questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

/* SHOW RESULTS */
function showResults() {
    document.getElementById("question").textContent =
        `Quiz completed! 🎉 You scored ${score} / ${currentQuiz.questions.length}.`;

    document.getElementById("quizForm").style.display = "none";
    document.getElementById("result").style.display = "none";
}

/* BACK HOME */
function goHome() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";
    document.getElementById("quizForm").style.display = "block";
    document.getElementById("result").style.display = "block";
}
