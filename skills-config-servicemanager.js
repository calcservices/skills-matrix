// ─────────────────────────────────────────────────────────────
// Skills Matrix — Service Manager Configuration
// Edit this file to customise skills, categories, levels, and UI text.
// No changes to index.html needed.
// ─────────────────────────────────────────────────────────────

// ─── UI TEXT ───
const UI_TEXT = {
    appTitle: "Skills Matrix — Service Managers",
    memberInputPlaceholder: "Team member name...",
    addMemberButton: "+ Add Member",
    skillHeaderHint: "click for detail",
    teamMemberColumn: "Team Member",
    teamAverageLabel: "Team Average",
    emptyStateTitle: "No team members yet",
    emptyStateHint: "Add a team member above to start building the matrix",
    exportFilename: "skills-matrix-service-managers.csv",
    detailHeadings: {
        description: "What this skill means",
        levels: "What each level looks like",
        improve: "How to improve",
    },
};

// ─── LEVELS ───
const LEVELS = [
    { label: "—",          color: "#6b7280" },
    { label: "Foundation", color: "var(--level-1)" },
    { label: "Proficient", color: "var(--level-2)" },
    { label: "Advanced",   color: "var(--level-3)" },
    { label: "Expert",     color: "var(--level-4)" },
];

// ─── SKILL CATEGORIES & SKILLS ───
const SKILLS = [
    {
        category: "Client & Relationship Management",
        skills: [
            {
                id: "clientRelationships",
                name: "Client Relationships",
                description: "Building and maintaining effective relationships with pension scheme clients — understanding their needs, managing expectations, and acting as a trusted point of contact.",
                levels: [
                    "Communicates with clients on straightforward matters with guidance. Understands who the key client contacts are.",
                    "Manages day-to-day client relationships independently. Responds promptly and professionally. Handles routine queries without escalation.",
                    "Builds strong, long-term client partnerships. Proactively identifies client concerns before they escalate. Manages complex or difficult client relationships.",
                    "Trusted strategic partner to senior client stakeholders. Influences client decisions. Turns difficult relationships into strong ones. Recognised as a go-to by clients.",
                ],
                improve: [
                    "Shadow a senior manager on client calls. Note how they manage tone, pace, and expectation-setting.",
                    "Own the relationship for one client. Proactively check in between formal meetings.",
                    "Take on a demanding client. Focus on understanding their real concerns beneath the surface.",
                    "Build account development plans for key clients. Mentor others on relationship management.",
                ],
            },
            {
                id: "escalationHandling",
                name: "Escalation Handling",
                description: "Managing client complaints, urgent issues, and escalations — staying calm under pressure, taking ownership, and driving resolution while keeping stakeholders informed.",
                levels: [
                    "Recognises when an issue needs escalating. Can communicate basic status updates to clients.",
                    "Handles standard escalations independently. Takes ownership, coordinates internally, keeps client informed throughout.",
                    "Manages high-pressure escalations across multiple schemes. De-escalates tense situations. Identifies root causes and prevents recurrence.",
                    "Handles critical incidents at a senior level. Defines the escalation framework. Coaches others on escalation management.",
                ],
                improve: [
                    "Observe how a senior manager handles a live escalation. Note the communication approach.",
                    "Take ownership of your next escalation from start to finish. Write up a lessons-learned note afterwards.",
                    "Analyse a pattern of escalations across schemes. Propose a structural fix.",
                    "Design an escalation playbook. Run scenario exercises with the team.",
                ],
            },
            {
                id: "serviceReviews",
                name: "Service Reviews & Reporting",
                description: "Preparing and running regular client service reviews — presenting MI, discussing performance against SLAs, and agreeing actions.",
                levels: [
                    "Contributes to service review preparation. Can present simple metrics with guidance.",
                    "Prepares and runs standard service reviews. Presents MI clearly. Agrees actions and follows up.",
                    "Runs strategic service reviews. Interprets trends in MI. Drives continuous improvement conversations with clients.",
                    "Defines the service review framework. Uses reviews to deepen client relationships and spot commercial opportunities.",
                ],
                improve: [
                    "Help prepare the MI pack for an upcoming review. Understand what each metric means.",
                    "Present a section of a service review. Get feedback from the client and your manager.",
                    "Lead a full review end-to-end. Prepare a narrative that tells a story with the data.",
                    "Redesign the service review format based on client feedback. Make reviews genuinely valuable.",
                ],
            },
        ],
    },
    {
        category: "Service Delivery",
        skills: [
            {
                id: "slaManagement",
                name: "SLA & Performance Management",
                description: "Monitoring, reporting, and managing performance against Service Level Agreements — understanding what's at risk, taking corrective action, and driving consistent delivery.",
                levels: [
                    "Understands what SLAs are and why they matter. Can check status of items against deadlines with guidance.",
                    "Monitors SLA performance across schemes independently. Identifies items at risk. Escalates appropriately when thresholds are breached.",
                    "Manages SLA performance proactively. Analyses breach patterns. Works with team leads to address root causes. Reports confidently to clients.",
                    "Defines and negotiates SLAs. Designs monitoring and reporting frameworks. Drives systemic improvements to hit targets consistently.",
                ],
                improve: [
                    "Learn what SLAs apply to your schemes. Understand the consequences of breach.",
                    "Track SLA status weekly. Build a habit of flagging risks early rather than reporting failures.",
                    "Analyse breach trends over a quarter. Present findings and a proposed action plan.",
                    "Review SLA frameworks with clients. Negotiate terms that are fair but achievable.",
                ],
            },
            {
                id: "incidentManagement",
                name: "Incident & Problem Management",
                description: "Responding to service incidents — coordinating resolution, communicating with stakeholders, and conducting post-incident reviews to prevent recurrence.",
                levels: [
                    "Aware of the incident process. Can log and track incidents with guidance.",
                    "Manages incidents independently. Coordinates resolution across teams. Communicates status clearly to stakeholders.",
                    "Handles major incidents across multiple schemes. Runs post-incident reviews. Identifies systemic issues and drives fixes.",
                    "Defines incident management processes. Builds resilience into service delivery. Measures and reduces incident frequency over time.",
                ],
                improve: [
                    "Read through a previous major incident report. Understand the timeline and what was learned.",
                    "Lead the next incident that comes your way from detection to resolution.",
                    "Run a post-incident review for a significant issue. Produce an action plan and track it to completion.",
                    "Design an incident response playbook. Set up monitoring to detect issues earlier.",
                ],
            },
            {
                id: "projectOversight",
                name: "Project & Programme Oversight",
                description: "Overseeing delivery of calc implementation projects — tracking progress, managing risks, and coordinating across coders, analysts, and the admin team.",
                levels: [
                    "Tracks tasks and progress on straightforward projects with guidance. Attends project meetings.",
                    "Manages own projects to plan. Identifies risks and escalates. Runs effective status meetings.",
                    "Oversees complex multi-scheme programmes. Manages dependencies across workstreams. Owns project governance.",
                    "Runs major delivery programmes with high visibility. Defines project management standards. Mentors others on delivery.",
                ],
                improve: [
                    "Take on ownership of tracking a project's actions log. Chase items and report status.",
                    "Lead a small project end-to-end. Build a simple risk register and review it weekly.",
                    "Manage a programme with multiple parallel workstreams. Use formal governance to keep it on track.",
                    "Define the project delivery framework for the team. Review past projects for lessons learned.",
                ],
            },
            {
                id: "resourcePlanning",
                name: "Resource Planning & Capacity",
                description: "Planning and managing team capacity — matching workload to resource, anticipating pinch points, and making the case for additional resource when needed.",
                levels: [
                    "Understands the team's current workload at a high level. Can identify when someone is overloaded.",
                    "Plans resource for own schemes. Balances competing priorities. Communicates capacity constraints clearly.",
                    "Manages capacity across the full team. Produces forward-looking resource plans. Negotiates priorities with clients and project managers.",
                    "Designs the resource planning model. Makes strategic headcount decisions. Uses data to drive capacity conversations with leadership.",
                ],
                improve: [
                    "Map out your current team's workload for the next four weeks. Spot the pinch points.",
                    "Build a simple capacity tracker. Use it to have an evidence-based conversation about priorities.",
                    "Produce a quarterly resource plan. Share it with stakeholders and get buy-in.",
                    "Design a capacity planning model that accounts for leave, skills mix, and project pipeline.",
                ],
            },
        ],
    },
    {
        category: "People Management",
        skills: [
            {
                id: "performanceManagement",
                name: "Performance Management",
                description: "Setting clear expectations, providing regular feedback, conducting appraisals, and managing performance issues — helping people succeed and addressing problems early.",
                levels: [
                    "Understands the performance management process. Participates in appraisal conversations.",
                    "Conducts regular 1:1s. Sets objectives and gives feedback. Manages standard performance situations.",
                    "Handles complex performance issues constructively. Builds development plans. Coaches people to improve sustainably.",
                    "Defines performance frameworks. Creates a high-performance culture. Coaches other managers on performance conversations.",
                ],
                improve: [
                    "Ensure your 1:1s have a consistent structure. Prepare in advance and follow up on actions.",
                    "Write SMART objectives with each of your team. Review them quarterly.",
                    "Handle a performance concern early with a direct conversation. Seek HR guidance where needed.",
                    "Create a performance management guide for new managers. Build team-wide standards for objective-setting.",
                ],
            },
            {
                id: "developmentCoaching",
                name: "Development & Coaching",
                description: "Identifying development needs, creating growth opportunities, and coaching team members — helping people build skills and progress their careers.",
                levels: [
                    "Discusses development with team members. Aware of available training resources.",
                    "Creates individual development plans. Identifies opportunities (training, stretch tasks, mentoring). Gives constructive feedback.",
                    "Coaches team members effectively. Connects development to career goals. Builds a learning culture within the team.",
                    "Designs team development programmes. Spots future talent. Builds pipelines for succession. Influences L&D strategy.",
                ],
                improve: [
                    "Ask each team member what they want to develop. Connect it to a concrete opportunity.",
                    "Build a development plan for each direct report. Review it in 1:1s quarterly.",
                    "Use coaching questions instead of giving answers. Help people solve their own problems.",
                    "Design a structured development programme. Make career progression transparent and fair.",
                ],
            },
            {
                id: "teamEngagement",
                name: "Team Engagement & Culture",
                description: "Building a motivated, cohesive team — creating psychological safety, recognising good work, managing wellbeing, and fostering a positive working environment.",
                levels: [
                    "Aware of team morale and basic wellbeing needs. Creates a respectful environment.",
                    "Actively recognises good work. Checks in on wellbeing. Builds a team environment where people feel comfortable raising concerns.",
                    "Drives team engagement initiatives. Spots and addresses morale issues early. Creates a culture of trust, feedback, and continuous improvement.",
                    "Shapes the team's culture deliberately. Builds high-trust environments. Recognised as a manager people want to work for.",
                ],
                improve: [
                    "Say thank you specifically and promptly when someone does good work. Be consistent.",
                    "Run a retrospective on how the team is working together. Act on the feedback.",
                    "Measure team engagement (pulse surveys, 1:1 conversation). Use the data to take action.",
                    "Articulate the culture you want to build. Make it visible in your daily behaviour.",
                ],
            },
            {
                id: "conflictResolution",
                name: "Conflict & Difficult Conversations",
                description: "Addressing conflict between team members, managing difficult conversations with direct reports or stakeholders, and maintaining professional relationships under pressure.",
                levels: [
                    "Recognises conflict. Can have straightforward corrective conversations with guidance.",
                    "Addresses conflict directly and constructively. Has difficult 1:1 conversations calmly and professionally.",
                    "Mediates between team members. Handles sensitive HR situations. Maintains relationships through challenging conversations.",
                    "Coaches others on conflict resolution. Creates a culture where issues are raised early, not left to fester.",
                ],
                improve: [
                    "Don't avoid difficult conversations. Prepare what you want to say and have them promptly.",
                    "Use a structure for difficult conversations (e.g. SBI: Situation-Behaviour-Impact).",
                    "Mediate a conflict between two team members. Focus on understanding both perspectives.",
                    "Run training on giving and receiving feedback. Build team norms around healthy conflict.",
                ],
            },
        ],
    },
    {
        category: "Pension Domain (Overview)",
        skills: [
            {
                id: "schemeKnowledge",
                name: "Scheme & Legislation Awareness",
                description: "Sufficient understanding of pension scheme rules, key legislation, and regulatory requirements to have credible client conversations, oversee delivery, and spot when something doesn't look right.",
                levels: [
                    "Aware of the main pension calculation types. Can follow a high-level conversation about scheme benefits.",
                    "Understands the key benefit structures (DB, DC, hybrid). Familiar with major legislation (GMP, McCloud, dashboards). Can discuss schemes confidently with clients.",
                    "Strong breadth of knowledge across scheme types and legislation. Spots regulatory risks. Can interpret scheme rules well enough to challenge technical output.",
                    "Deep overview knowledge across all schemes managed. Consulted on regulatory impact. Keeps team updated on legislative changes and their operational implications.",
                ],
                improve: [
                    "Read a scheme booklet end-to-end for one of your schemes. Ask an analyst to explain the key calcs.",
                    "Follow industry news (Pensions Age, TPR updates). Understand what's coming and what it means for your schemes.",
                    "Study a recent legislative change in detail (e.g. McCloud remedy). Understand the operational implications.",
                    "Present a regulatory update to your team. Build a briefing pack for new joiners.",
                ],
            },
            {
                id: "calculationAwareness",
                name: "Calculation Awareness",
                description: "Understanding enough about how pension calculations work to manage the delivery team, sense-check outputs, and explain the process to clients — without needing to spec or code calcs yourself.",
                levels: [
                    "Knows the main calc types exist (quotes, retirements, deaths, transfers). Can describe the high-level process.",
                    "Understands the end-to-end calc delivery process. Can follow a worked example at a high level. Knows what coders and analysts each do.",
                    "Understands where complexity arises in calcs (GMP, tax, edge cases). Can have a technical conversation with coders and analysts. Challenges timelines and quality credibly.",
                    "Understands calc delivery deeply enough to set standards, spot systemic issues, and represent the team's work to the most technical client contacts.",
                ],
                improve: [
                    "Ask a coder or analyst to walk you through a completed calc from spec to output.",
                    "Sit in on a UAT session. Understand what the admin team are testing and why.",
                    "Read a calculation spec for a scheme you manage. Identify the parts you don't understand and ask.",
                    "Study a complex calc type (e.g. GMP equalisation) in enough depth to explain it to a client.",
                ],
            },
            {
                id: "regulatoryAwareness",
                name: "Regulatory & Compliance Awareness",
                description: "Understanding the regulatory environment — TPR expectations, HMRC requirements, GDPR, audit requirements — and ensuring the service operates within compliance boundaries.",
                levels: [
                    "Aware that regulation governs pension administration. Follows compliance procedures set by others.",
                    "Understands key regulatory requirements for pension services. Ensures team follows compliance procedures. Flags potential issues.",
                    "Monitors regulatory developments. Assesses operational impact. Ensures the team is ahead of compliance requirements.",
                    "Defines the compliance framework for the service. Owns regulatory risk. Represents the service in audits and regulatory reviews.",
                ],
                improve: [
                    "Read your organisation's data protection and pension compliance policies.",
                    "Follow TPR and HMRC updates. Understand which ones affect your service.",
                    "Lead a compliance review for your schemes. Identify any gaps and build an action plan.",
                    "Build a regulatory calendar for the team. Ensure nothing catches you by surprise.",
                ],
            },
        ],
    },
    {
        category: "Professional",
        skills: [
            {
                id: "communication",
                name: "Communication & Influencing",
                description: "Communicating effectively at all levels — with clients, senior leadership, technical teams, and your own team — in writing and verbally, and influencing outcomes through clear thinking and credible delivery.",
                levels: [
                    "Communicates clearly within the team and with clients on day-to-day matters.",
                    "Communicates confidently across stakeholder groups. Writes clear reports and emails. Presents in meetings with credibility.",
                    "Handles complex or sensitive communications. Adapts style to audience. Influences decisions at a senior level.",
                    "Exceptional communicator. Represents the service at the highest levels. Shapes narratives that land with boards and executive stakeholders.",
                ],
                improve: [
                    "Practice summarising a complex situation in three clear sentences. Get feedback.",
                    "Volunteer to present at a client meeting or internal leadership update.",
                    "Work on your written communication. Get a trusted colleague to review important emails or reports.",
                    "Present at board or exec level. Build a reputation as someone whose judgement is trusted.",
                ],
            },
            {
                id: "problemSolving",
                name: "Problem Solving & Decision Making",
                description: "Analysing problems, making sound decisions under uncertainty, and driving solutions — balancing speed with thoroughness.",
                levels: [
                    "Solves straightforward operational problems. Escalates when uncertain.",
                    "Makes good decisions independently on standard issues. Analyses situations before acting. Communicates reasoning clearly.",
                    "Tackles complex, ambiguous problems. Makes decisions with incomplete information. Thinks through second-order effects.",
                    "Solves systemic, cross-functional problems. Anticipates issues before they arise. Known for sound judgement in difficult situations.",
                ],
                improve: [
                    "When facing a decision, write down the options and their trade-offs before choosing.",
                    "Review a decision you made recently. What would you do differently? What did you learn?",
                    "Take on a problem that spans multiple teams. Coordinate the solution end-to-end.",
                    "Share your decision-making framework with your team. Build a culture of structured thinking.",
                ],
            },
            {
                id: "continuousImprovement",
                name: "Continuous Improvement",
                description: "Identifying opportunities to improve processes, quality, and efficiency in the service — and driving those improvements through to implementation.",
                levels: [
                    "Notices inefficiencies and suggests ideas. Participates in improvement initiatives.",
                    "Identifies and implements improvements within own area. Uses evidence to prioritise. Tracks outcomes.",
                    "Drives improvement programmes across the service. Engages stakeholders. Delivers measurable results.",
                    "Builds a continuous improvement culture. Uses structured methodologies. Transforms service performance over time.",
                ],
                improve: [
                    "Keep a list of friction points you notice each week. Pick one to fix each month.",
                    "Propose a specific process improvement with a clear rationale and success measure.",
                    "Lead a service improvement project. Measure the before-and-after impact.",
                    "Embed improvement as a team habit. Run regular retrospectives and track action completion.",
                ],
            },
            {
                id: "timeManagement",
                name: "Time Management & Prioritisation",
                description: "Managing a complex workload — balancing strategic priorities with day-to-day operational demands, and making clear decisions about where to focus.",
                levels: [
                    "Completes tasks on time with priorities set by others. Manages own diary.",
                    "Manages competing demands effectively. Communicates proactively when overloaded. Keeps stakeholders informed.",
                    "Prioritises strategically across multiple schemes and workstreams. Delegates effectively. Protects time for high-value work.",
                    "Optimises team workflow as well as personal productivity. Removes systemic bottlenecks. Balances short-term delivery with long-term investment.",
                ],
                improve: [
                    "Block time for your most important priorities. Treat that time as sacrosanct.",
                    "Audit how you spend your time for a week. Identify what to stop, delegate, or reduce.",
                    "Practise saying no to low-value requests with a clear reason.",
                    "Review your team's workflow for bottlenecks. Address the structural causes, not just the symptoms.",
                ],
            },
        ],
    },
];
