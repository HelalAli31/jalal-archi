import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Building2, PenTool, Wrench, Boxes, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero.jpeg";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpeg";
import project6 from "@/assets/project-6.jpeg";
import project7 from "@/assets/project-7.jpeg";
import project8 from "@/assets/project-8.jpeg";
import project9 from "@/assets/project-9.jpeg";

const Index = () => {
  const whatsappUrl = "https://wa.me/972546938309";

  const services = [
    {
      icon: Building2,
      title: "אדריכלות",
      description: "עיצוב אדריכלי חדשני שהופך חזונות למציאות מדהימה בדיוק ואלגנטיות.",
    },
    {
      icon: PenTool,
      title: "עיצוב פנים",
      description: "חללים פנימיים מתוחכמים המשלבים יוקרה, פונקציונליות והסגנון האישי הייחודי שלך.",
    },
    {
      icon: Wrench,
      title: "שיפוץ ושדרוג",
      description: "שירותי שיפוץ מקצועיים המעניקים חיים חדשים לחללים קיימים עם תשומת לב קפדנית לפרטים.",
    },
    {
      icon: Boxes,
      title: "הדמיות תלת מימד",
      description: "הדמיות תלת מימדיות פוטו-ריאליסטיות שמביאות את הפרויקט שלך לחיים לפני תחילת הבנייה.",
    },
  ];

  const projects = [
        { image: project4, title: "מגורים אלגנטיים" }, { image: project2, title: "חלל מגורים יוקרתי" },
    { image: project3, title: "וילה עכשווית" },
    { image: project9, title: "בית פרטי עכשווי" },
          { image: project7, title: "בניין מגורים מודרני" },
 { image: project8, title: "וילה יוקרתית" },
    { image: project1, title: "עיצוב משרד מודרני" },
     { image: project6, title: "משרד מקצועי" },   

    { image: project5, title: "סוויטה מנהלים" },


  ];

  const processSteps = [
    {
      number: "01",
      title: "רעיון",
      description: "אנו מקשיבים לחזון שלך ומפתחים קונסיפטים עיצוביים ראשוניים המתאימים ליעדים שלך.",
    },
    {
      number: "02",
      title: "תכנון",
      description: "תכנון מפורט ושרטוטים טכניים מבטיחים ששקלנו בקפידה כל היבט.",
    },
    {
      number: "03",
      title: "חומרים",
      description: "אנו בוחרים חומרים וגימורים איכוטיים המשקפים איכות ותחכום.",
    },
    {
      number: "04",
      title: "ביצוע",
      description: "ניהול פרויקט מומחה מבטיח ביצוע ללא דופי מההתחלה ועד להשלמה.",
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
    <section 
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/60 via-luxury-dark/50 to-luxury-dark/70" />

  <div className="relative z-10 container mx-auto px-6 text-center">
    <div className="fade-in">
      
      <img 
        src={logo} 
        alt="לוגו גלאל עלי אדריכלות" 
        className="w-40 md:w-64 h-auto mx-auto mb-8 drop-shadow-2xl rounded-3xl mt-3"
      />

      <div className="bg-[rgba(99,60,40,0.6)] backdrop-blur-sm rounded-3xl p-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-luxury-cream mb-6 tracking-tight">
          אדריכלות ועיצוב פנים <br />
          <span className="text-amber-400">גלאל עלי</span>
        </h1>

        <p className="text-lg md:text-2xl text-luxury-beige mb-12 leading-relaxed">
          יוצרים חללים נצחיים שבהם אלגנטיות פוגשת חדשנות
        </p>

        <Button 
          size="lg" 
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="bg-accent hover:bg-luxury-gold-light text-primary font-semibold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-[0_20px_60px_-10px_hsl(var(--luxury-gold)/0.5)] transition-all duration-500 hover:scale-105"
        >
          <MessageCircle className="ml-2 h-5 w-5" />
          יעוץ בווטסאפ
        </Button>
      </div>

    </div>
  </div>
</section>


      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                יוצרים חללים המעוררים השראה
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                באדריכלות ועיצוב פנים ג'לאל עלי, אנו מאמינים שחללים יוצאי דופן נולדים מהרמוניה מושלמת של צורה, תפקוד ותחושה. עם שנות ניסיון ומחויבות בלתי מתפשרת למצוינות, אנו הופכים חזונות אדריכליים למציאות עוצרת נשימה.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                הגישה שלנו משלבת עקרונות עיצוב עכשוויים עם אלגנטיות נצחית, ומבטיחה שכל פרויקט משקף את האופי והשאיפות הייחודיים של הלקוחות שלנו.
              </p>
              <Button 
                onClick={() => window.open(whatsappUrl, '_blank')}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                דברו על הפרויקט שלכם
              </Button>
            </div>
            <div className="hover-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project3} 
                alt="אודות אדריכלות ג'לאל עלי" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              השירותים שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              פתרונות עיצוב ואדריכלות מקיפים המותאמים להגשמת החזון שלכם
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              פרויקטים נבחרים
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              חקרו את תיק העבודות שלנו של פרויקטי אדריכלות ועיצוב פנים יוצאי דופן
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="fade-in relative" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              התהליך שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              גישה יעילה המבטיחה מצוינות בכל שלב
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                <ProcessStep {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-luxury-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-cream mb-6">
              מוכנים לשנות את החלל שלכם?
            </h2>
            <p className="text-xl text-luxury-beige mb-12 max-w-2xl mx-auto">
              בואו נדבר על החזון שלכם וניצור משהו יוצא דופן ביחד
            </p>
            <Button 
              size="lg" 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-accent hover:bg-luxury-gold-light text-primary font-semibold text-lg px-12 py-7 rounded-full shadow-2xl hover:shadow-[0_20px_60px_-10px_hsl(var(--luxury-gold)/0.6)] transition-all duration-500 hover:scale-105"
            >
              <MessageCircle className="ml-3 h-6 w-6" />
              התחילו את הפרויקט שלכם עכשיו
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-luxury-dark border-t border-luxury-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="לוגו ג'לאל עלי אדריכלות" className="h-12 w-auto" />
              <div className="text-luxury-cream">
                <p className="font-semibold">אדריכלות ועיצוב פנים ג'לאל עלי</p>
                <p className="text-sm text-luxury-beige">יוצרים חללים נצחיים</p>
              </div>
            </div>
            
            <div className="text-luxury-beige text-center md:text-left">
              <p className="mb-2">צרו קשר בווטסאפ</p>
              <Button 
                variant="link" 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="text-accent hover:text-luxury-gold-light p-0"
              >
                054-693-8309
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-luxury-beige/20 text-center text-luxury-beige text-sm">
            <p>© 2025 אדריכלות ועיצוב פנים ג'לאל עלי. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
