# Header Component - Bondaruk Partners

## Описание

Полнофункциональный адаптивный header компонент для сайта Bondaruk Partners с поддержкой трех языков (украинский, русский, английский).

## Структура компонентов

```
components/header/
├── Header.tsx           # Главный компонент header
├── TopBar.tsx          # Верхняя панель с контактами
├── Logo.tsx            # Логотип компании
├── Navigation.tsx      # Навигационное меню
├── SocialLinks.tsx     # Ссылки на соцсети
├── PhoneButton.tsx     # Кнопка телефона
├── LanguageSwitcher.tsx # Переключатель языков
├── MobileMenu.tsx      # Мобильное меню
└── index.ts            # Экспорты
```

## Особенности

### Адаптивный дизайн
- **Desktop**: Полное меню с навигацией, соцсетями и кнопкой телефона
- **Mobile**: Компактный header с бургер-меню

### Многоязычность
- 3 языка: украинский (по умолчанию), русский, английский
- Переключатель языков в header
- Контекст для управления локализацией

### Компоненты

#### TopBar
Верхняя зеленая полоса с контактной информацией:
- Адрес: м. Київ вул. Хрещатик 7/1
- Email: e.kievhome@gmail.com

#### Navigation
Навигационное меню с элементами:
- Головна / Главная / Home
- Агенти / Агенты / Agents (с dropdown)
- Продати / Продать / Sell (с dropdown)
- Купити / Купить / Buy (с dropdown)
- Орендувати / Арендовать / Rent (с dropdown)
- Здати / Сдать / Lend (с dropdown)
- Об'єкти / Объекты / Objects (с dropdown)
- Наші партнери / Наши партнеры / Our Partners
- Контакти / Контакты / Contacts
- Блог / Блог / Blog

#### SocialLinks
Иконки социальных сетей:
- Telegram
- Viber
- Instagram
- Facebook

#### PhoneButton
Кнопка с телефоном +38 093 967 84 54 с градиентной обводкой

#### LanguageSwitcher
Желтая кнопка переключения языков (UA/RU/EN)

## Использование

```tsx
import { Header } from '@/components/header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
```

## Локализация

### Использование в компонентах

```tsx
import { useLocale } from '@/lib/context/LocaleContext';

function MyComponent() {
  const { locale, setLocale, t } = useLocale();
  
  return (
    <div>
      <h1>{t.nav.home}</h1>
      <p>{t.contact.phone}</p>
    </div>
  );
}
```

### Добавление новых переводов

Отредактируйте файл `lib/i18n/translations.ts`:

```typescript
export const translations = {
  uk: {
    nav: {
      // ... существующие переводы
      newItem: 'Новий елемент',
    },
  },
  ru: {
    nav: {
      newItem: 'Новый элемент',
    },
  },
  en: {
    nav: {
      newItem: 'New Item',
    },
  },
};
```

## Стили

### Цветовая палитра
- **Зеленый градиент**: `#31AA5A` → `#258A49`
- **Желтый**: `#FCC71C`
- **Черный**: `#1D1918`

### Tailwind классы
- `bg-gradient-green` - зеленый градиент
- `border-gradient-green` - градиентная обводка
- Используется шрифт Montserrat

## Технические детали

### Зависимости
- Next.js 16.0.1
- React 19.2.0
- Tailwind CSS 4
- TypeScript 5

### Breakpoints
- Mobile: < 1024px
- Desktop: ≥ 1024px

## Следующие шаги

1. Добавить функционал dropdown меню для элементов навигации
2. Интегрировать реальные ссылки на соцсети
3. Настроить routing для многоязычности
4. Добавить анимации при открытии мобильного меню
5. Оптимизировать SVG иконки
