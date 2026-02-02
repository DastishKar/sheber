import './App.css'

const services = [
  {
    title: 'Технический надзор',
    description: 'Контроль качества на объектах первого уровня ответственности',
    icon: '🔍',
  },
  {
    title: 'Управление проектами',
    description: 'Полное сопровождение строительных проектов от идеи до сдачи',
    icon: '📋',
  },
  {
    title: 'Техническое сопровождение',
    description: 'Профессиональная поддержка на всех этапах строительства',
    icon: '⚙️',
  },
  {
    title: 'Консалтинг',
    description: 'Экспертные консультации в области строительства и инжиниринга',
    icon: '💡',
  },
  {
    title: 'Техническое обследование',
    description: 'Диагностика и оценка состояния строительных объектов',
    icon: '🏗️',
  },
  {
    title: 'Аттестация ИТР',
    description: 'Аттестация инженерно-технических работников',
    icon: '📜',
  },
  {
    title: 'Проекты производства работ',
    description: 'Разработка ППР и исполнительной документации',
    icon: '📐',
  },
]

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="landing">
      <header className="header">
        <div className="header__inner">
          <a
            href="#"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            SHEBER
          </a>
          <nav className="nav">
            <button onClick={() => scrollToSection("about")}>О нас</button>
            <button onClick={() => scrollToSection("services")}>Услуги</button>
            <button onClick={() => scrollToSection("contacts")}>
              Контакты
            </button>
          </nav>
          <a href="tel:+77122396753" className="header__phone">
            +7 (7122) 396-753
          </a>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero__bg" />
        <div className="hero__decor hero__decor--1" aria-hidden />
        <div className="hero__decor hero__decor--2" aria-hidden />
        <div className="hero__decor hero__decor--3" aria-hidden />
        <div className="hero__content">
          <p className="hero__label">Инжиринговый центр</p>
          <h1 className="hero__title">SHEBER</h1>
          <p className="hero__tagline">
            Развитие строительной отрасли через качественный инжиниринг
          </p>
          <button
            className="hero__cta"
            onClick={() => scrollToSection("contacts")}
          >
            Связаться с нами
          </button>
        </div>
        <div className="hero__scroll">
          <span>Листайте вниз</span>
          <div className="hero__scroll-icon" />
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <h2 className="section__title">О компании</h2>
          <div className="about__content">
            <p className="about__text">
              <strong>Инжиринговый центр «Шебер»</strong> — молодая динамичная
              компания, ориентированная на развитие строительной отрасли
              Казахстана. Мы объединяем опытных специалистов и современные
              подходы для реализации проектов любой сложности.
            </p>
            <p className="about__text">
              Наша команда обеспечивает полный цикл инжиниринговых услуг: от
              технического надзора и управления проектами до консалтинга и
              аттестации персонала.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container">
          <h2 className="section__title">Наши услуги</h2>
          <div className="services__grid">
            {services.map((service, i) => (
              <article key={i} className="service-card">
                <span className="service-card__icon">{service.icon}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section advantages">
        <div className="container">
          <h2 className="section__title">Почему мы</h2>
          <div className="advantages__grid">
            <div className="advantage">
              <div className="advantage__num">01</div>
              <h3>Опыт и экспертиза</h3>
              <p>
                Квалифицированные специалисты с опытом работы на объектах I
                уровня ответственности
              </p>
            </div>
            <div className="advantage">
              <div className="advantage__num">02</div>
              <h3>Комплексный подход</h3>
              <p>Полный спектр инжиниринговых услуг в одном окне</p>
            </div>
            <div className="advantage">
              <div className="advantage__num">03</div>
              <h3>Региональное присутствие</h3>
              <p>Офисы в Атырау и Уральске — близко к вашим объектам</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="section contacts">
        <div className="container">
          <h2 className="section__title">Контакты</h2>
          <div className="contacts__grid">
            <div className="contact-card">
              <h3>Атырау</h3>
              <p>Промзона Береке 32, офис 1</p>
              <a href="tel:+77122396753">+7 (7122) 396-753</a>
              <a href="tel:+77122396020">+7 (7122) 396-020</a>
            </div>
            <div className="contact-card">
              <h3>Email</h3>
              <a href="mailto:info@ecsheber.kz">info@ecsheber.kz</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© SHEBER Инжиниринговый центр</span>
          <a href="mailto:info@ecsheber.kz">info@ecsheber.kz</a>
        </div>
      </footer>
    </div>
  );
}

export default App
