import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";
const code = JSON.parse(localStorage.getItem("code")) || "en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: code,
    resources: {
      en: {
        translation: {
          overview: "overiew",
          myWatchlist: "My Watchlist",
          login: "Login/Register",
          welcome: "Welcome,",
          heroDescription:
            "Millions of movies, TV shows and people to discover. Explore now.",
          searchPlaceHolder: "Search Movies and TV Shows",
          search: "Search",
          trending: "Trending",
          today: "Today",
          thisWeek: "This Week",
          movies: "Movies",
          tvShows: "TV Shows",
          nowPlaying: "Now Playing",
          topRated: "Top Rated",
          votes: "Votes",
          director: "Director",
          producer: "Producer",
          productionCompanies: "Production Companies",
          editor: "Editor",
          topBilledCast: "Top Billed Cast",
          stats: "Stats",
          status: "Status",
          tagline: "Tagline",
          language: "Language",
          genres: "Genres",
          revenue: "Revenue",
          budget: "Budget",
          audiance: "Audiance",
          webSite: "Website",
          moreLikeThis: "More like this",
          similarErr: `We're currently working on improving this feature for this
          movie. To provide the best experience, we'll need some
          additional data. Please check back soon!`,
          episodes: "Episodes",
          seasons: "Seasons",
          showType: "Show Type",
          fan: "Fan",
          upComing: "Up Coming",
          popular: "Popular",
          airingToday: "Airing Today",
        },
      },
      ar: {
        translation: {
          overview: "نظرة عامة",
          myWatchlist: "قائمة المشاهدة الخاصة بي",
          login: "تسجيل الدخول",
          welcome: "،مرحباً",
          heroDescription:
            "ملايين الأفلام والبرامج التلفزيونية والأشخاص لاكتشافها. اكتشف الآن",
          searchPlaceHolder: "البحث عن الأفلام والبرامج التلفزيونية",
          search: "إبحث",
          trending: "الرائج",
          today: "اليوم",
          thisWeek: "هذا الاسبوع",
          movies: "الأفلام",
          tvShows: "المسلسلات",
          nowPlaying: "يعرض حالياً",
          topRated: "الاعلى تقييماً",
          votes: "تقييمات المستخدمين",
          director: "المخرج",
          producer: "المنتج",
          editor: "المحرر",
          topBilledCast: "الممثلين الاعلى اجراً",
          stats: "احصائيات",
          status: "الحالة",
          tagline: "الشعار",
          language: "اللغة",
          genres: "التصنيفات",
          revenue: "العائد المادي",
          budget: "الميزانية",
          audiance: "الجمهور",
          webSite: "الموقع الالكتروني",
          moreLikeThis: "المزيد مثل هذا",
          similarErr:
            "نعمل حاليًا على تحسين هذه الميزة لهذا الفيلم. لتقديم أفضل تجربة، سنحتاج إلى بعض البيانات الإضافية. يرجى التحقق مرة أخرى قريبًا!",
          productionCompanies: "شركات الانتاج",
          episodes: "الحلقات",
          seasons: "المواسم",
          showType: "نوع المسلسل",
          fan: "متابع",
          upComing: "قادم قريباً",
          popular: "رائج",
          airingToday: "يعرض اليوم",
        },
      },
    },
  });
