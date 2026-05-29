import { Component, HostListener, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  isScrolled  = signal(false);
  menuOpen    = signal(false);
  activeSection = signal('hero');

  meals = [
    {
      name: 'شاورما دجاج',
      desc: 'مو بس شاورما... هي تجربة حقيقية 🔥',
      price: '1,500',
      badge: 'الأكثر طلباً',
      img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'شاورما لحم',
      desc: 'لحم تركي أصلي محمر على الفحم',
      price: '2,000',
      badge: 'جديد',
      img: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'زنجر تركي',
      desc: 'مقرمش من برا، طري ولذيذ من جوا',
      price: '1,800',
      badge: '',
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'بطاطا مع جبنة',
      desc: 'الإدمان الحلال الوحيد في العالم 😍',
      price: '800',
      badge: '',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'وجبة العيلة',
      desc: 'للعيلة الكبيرة والجوع الأكبر',
      price: '5,000',
      badge: 'عرض خاص',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'برجر تركي',
      desc: 'برجر مو عادي... بالنكهة التركية الأصيلة',
      price: '2,200',
      badge: '',
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  galleryImages = [
    { src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1400&auto=format&fit=crop', tall: true  },
    { src: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop', tall: true  },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop', tall: true  },
    { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1400&auto=format&fit=crop', tall: false },
    { src: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=1400&auto=format&fit=crop', tall: true  },
    { src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1400&auto=format&fit=crop', tall: false }
  ];

  testimonials = [
    {
      name: 'أحمد الخليل',
      text: 'أفضل شاورما جربتها بحياتي! الطعم ما بتلاقيه بأي مطعم ثاني في اللاذقية. 🔥',
      avatar: 'أ',
      role: 'زبون دائم'
    },
    {
      name: 'سارة المصري',
      text: 'الزنجر التركي إدمان حقيقي! كل ما أقول رح آكل صحي... بيجي ريحته ويخليني أروح.',
      avatar: 'س',
      role: 'زبونة وفية'
    },
    {
      name: 'محمد العلي',
      text: 'وجبة العيلة كانت خرافية! الكمية أكثر من كافية وكل الأهل انبسطوا.',
      avatar: 'م',
      role: 'زبون عائلي'
    },
    {
      name: 'ريم حسون',
      text: 'شاورما اللحم التركية... والله ما رجعت لأي مطعم ثاني بعدها. أصلية وطازجة!',
      avatar: 'ر',
      role: 'زبونة جديدة'
    }
  ];

  navLinks = [
    { label: 'الرئيسية',     id: 'hero'         },
    { label: 'المنيو',       id: 'menu'         },
    { label: 'من نحن',       id: 'about'        },
    { label: 'الصور',        id: 'gallery'      },
    { label: 'آراء الزبائن', id: 'testimonials' },
    { label: 'تواصل معنا',   id: 'contact'      }
  ];

  marqueeItems = [
    '🔥 شاورما مو عادية',
    '😏 إذا بتحبها... جبلها شاورما',
    '🌯 الشاورما اللي بتخليك تنسى الدايت',
    '🔥 ريحة الشاورما لحالها بتجيبك',
    '😍 أكل سريع... بس الإدمان دائم',
    '🇹🇷 من قلب تركيا لعندك',
    '🔥 شاورما مو عادية',
    '😏 إذا بتحبها... جبلها شاورما',
    '🌯 الشاورما اللي بتخليك تنسى الدايت',
    '🔥 ريحة الشاورما لحالها بتجيبك',
    '😍 أكل سريع... بس الإدمان دائم',
    '🇹🇷 من قلب تركيا لعندك'
  ];

  stars = [1, 2, 3, 4, 5];

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
