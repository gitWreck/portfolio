/**
 * Visual Communications & Graphic Design Database
 * Official publication materials, infographics, and advisories for UPLB CFNR OCS.
 */

const GRAPHIC_DESIGNS = [
  {
    id: 'pubmat-01-birthday-john-lloyd',
    title: 'Staff Birthday Greeting: Sir John Lloyd Mamalayan',
    date: 'November 3, 2026',
    year: '2026',
    category: 'Greetings & Milestones',
    image: 'assets/graphics/pubmat_01_our_lively_dedicated_and.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1F9747ttGm/',
    caption: 'Official OCS-CFNR birthday pubmat celebrating dedicated colleague Sir John Lloyd Mamalayan, acknowledging his energy and commitment to office operations.'
  },
  {
    id: 'pubmat-02-halloween-2026',
    title: 'Halloween 2026 OCS-CFNR Community Greeting',
    date: 'October 31, 2026',
    year: '2026',
    category: 'Seasonal & Community',
    image: 'assets/graphics/pubmat_02_may_your_halloween_filled.jpg',
    fbUrl: 'https://www.facebook.com/share/p/19fyy61na8/',
    caption: 'Seasonal greeting material sent to the forestry student body, faculty, and university community celebrating Halloween.'
  },
  {
    id: 'pubmat-03-foresters-exam-top10',
    title: '2026 Foresters Licensure Exam: 6 Graduates in Top 10',
    date: 'October 14, 2026',
    year: '2026',
    category: 'Board Exam & Honors',
    image: 'assets/graphics/pubmat_03_congratulations_our_new_foresters.jpg',
    fbUrl: 'https://www.facebook.com/share/p/19ZeDMkjjE/',
    caption: 'Congratulatory publication honoring 6 UPLB BS Forestry graduates who dominated the national Top 10 rank list in the 2026 Professional Foresters Licensure Exam.'
  },
  {
    id: 'pubmat-04-foresters-exam-sweep',
    title: 'Flawless 100% Sweep: 129/129 Licensed Foresters',
    date: 'October 13, 2026',
    year: '2026',
    category: 'Board Exam & Honors',
    image: 'assets/graphics/pubmat_04_129_takers_129_licensed.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1JvUqa7PEJ/',
    caption: 'High-impact announcement banner celebrating UPLB’s perfect 100% passing rate with 129 licensed foresters as the #1 top performing forestry institution.'
  },
  {
    id: 'pubmat-05-student-exchange-2026',
    title: 'Student Exchange Program Acceptance (AY 2026–2027)',
    date: 'September 11, 2026',
    year: '2026',
    category: 'Academic Exchange',
    image: 'assets/graphics/pubmat_05_are_proud_announce_that.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1EucfB9Jxm/',
    caption: 'Academic advisory congratulating accepted BS Forestry student delegates embarking on the 1st Semester international student exchange program.'
  },
  {
    id: 'pubmat-06-essentials-hub-launch',
    title: 'Student Essentials Hub Official Launch & Pantry Access',
    date: 'August 28, 2026',
    year: '2026',
    category: 'Student Welfare',
    image: 'assets/graphics/pubmat_06_need_essential_item_weve.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1KAzZKLJQ7/',
    caption: 'Official launch banner and guidance pubmat announcing the operational opening of the Student Essentials Hub welfare pantry at OCS-CFNR.'
  },
  {
    id: 'pubmat-07-professorial-chair-mendoza',
    title: 'One UP Professorial Chair Award: Prof. Rosalie C. Mendoza',
    date: 'December 19, 2025',
    year: '2025',
    category: 'Faculty Honors',
    image: 'assets/graphics/pubmat_07_massive_congrats_our_very.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1CUWxxZ2y6/',
    caption: 'Honorary tribute pubmat recognizing College Secretary Prof. Rosalie C. Mendoza for receiving the One UP Professorial Chair Award for Teaching & Research.'
  },
  {
    id: 'pubmat-08-biodiversity-camp-2025',
    title: '2025 Philippines Biodiversity Camp for Youth Announcement',
    date: 'September 30, 2025',
    year: '2025',
    category: 'Events & Call for Apps',
    image: 'assets/graphics/pubmat_08_applications_are_now_open.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1CxxSSx3KP/',
    caption: 'Call for student applications and qualification guidelines for the nationwide Biodiversity Camp for Youth hosted at UPLB.'
  },
  {
    id: 'pubmat-09-international-achievements',
    title: 'International Stage Achievements: Essay & Project Honors',
    date: 'August 20, 2025',
    year: '2025',
    category: 'Student Honors',
    image: 'assets/graphics/pubmat_09_proudly_celebrate_our_students.jpg',
    fbUrl: 'https://www.facebook.com/share/p/19iVug6qDL/',
    caption: 'Recognition pubmat celebrating 1st Place Essay awardee John Ivann Pedrozo and forestry students shining on the global stage.'
  },
  {
    id: 'pubmat-10-recruitment-sa-ga',
    title: 'Recruitment Call: Student Assistant & Graduate Assistant',
    date: 'February 28, 2025',
    year: '2025',
    category: 'Student Employment',
    image: 'assets/graphics/pubmat_10_are_looking_for_for.jpg',
    fbUrl: 'https://www.facebook.com/share/p/18MrymJwuh/',
    caption: 'Office recruitment announcement detailing qualifications for undergraduate Student Assistants and IT/Computer Science Graduate Assistants.'
  },
  {
    id: 'pubmat-11-foresters-exam-2024',
    title: 'Top Performing School: 97.22% Licensure Passing Rate (105 Passers)',
    date: 'November 5, 2024',
    year: '2024',
    category: 'Board Exam & Honors',
    image: 'assets/graphics/pubmat_11_uplb_has_emerged_the.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1e1EoCFr62/',
    caption: 'Victory pubmat congratulating 105 newly licensed foresters and celebrating UPLB’s top performing ranking in the 2024 licensure board.'
  },
  {
    id: 'pubmat-12-student-exchange-2024',
    title: 'Student Exchange Program Acceptance Announcement',
    date: 'February 23, 2024',
    year: '2024',
    category: 'Academic Exchange',
    image: 'assets/graphics/pubmat_12_are_proud_announce_that.jpg',
    fbUrl: 'https://www.facebook.com/share/p/1DomsZFtiq/',
    caption: 'Official congratulatory announcement for BS Forestry student exchange qualifiers traveling abroad for academic studies.'
  }
];

if (typeof window !== 'undefined') {
  window.GRAPHIC_DESIGNS = GRAPHIC_DESIGNS;
}

