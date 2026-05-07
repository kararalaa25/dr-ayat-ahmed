import portrait from '@/assets/portrait.png';
import { Button } from '@/components/ui/button';
import { ArrowDown, Award, Sparkles } from 'lucide-react';

export function HeroBio() {
  return (
    <section id="bio" className="relative overflow-hidden gradient-soft">
      {/* Floating accent orbs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float delay-500" />

      <div className="container mx-auto grid min-h-[92vh] grid-cols-1 items-center gap-16 px-6 py-28 lg:grid-cols-12 lg:gap-12">
        {/* Bio bento card */}
        <div className="relative order-2 lg:order-1 lg:col-span-7">
          <div className="bento-card glass animate-pop-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              General Dentistry · Restorative Care
            </div>

            <p className="mt-6 font-script text-3xl text-accent animate-fade-up delay-100">Hello, I'm</p>
            <h1 className="mt-1 font-script text-6xl font-bold leading-[1.05] tracking-tight text-foreground animate-fade-up delay-200 md:text-7xl lg:text-8xl">
              Dr. Ayat Ahmed
            </h1>

            <p className="mt-8 font-script text-2xl leading-relaxed text-foreground/80 animate-fade-up delay-300">
              "Conservative dentistry, lasting results — every restoration crafted with care."
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground animate-fade-up delay-500">
              A general dentist focused on everyday restorative excellence — from{' '}
              <span className="font-semibold text-foreground">Class I & II composite</span> restorations and{' '}
              <span className="font-semibold text-foreground">crown & bridge</span> work to{' '}
              <span className="font-semibold text-foreground">endodontic treatment</span> and{' '}
              <span className="font-semibold text-foreground">direct veneers</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5 animate-fade-up delay-700">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground">
                <Award className="h-4 w-4 text-accent" />
                General Dentist
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground">
                <Award className="h-4 w-4 text-accent" />
                Restorative & Endodontics
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground">
                <Award className="h-4 w-4 text-accent" />
                Direct Veneers
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up delay-700">
              <Button asChild size="lg" className="rounded-full gradient-mint text-primary shadow-glow hover:opacity-90">
                <a href="#gallery">View My Work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Portrait + stat bento cards */}
        <div className="relative order-1 lg:order-2 lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-soft animate-pop-in">
            <img
              src={portrait}
              alt="Dr. Ayat Ahmed, general dentist"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-3xl glass p-5 shadow-card animate-fade-up delay-700">
            <p className="font-script text-3xl text-accent">General</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Dental practice</p>
          </div>
          <div className="absolute -right-4 top-10 rounded-3xl glass p-5 shadow-card animate-fade-up delay-500">
            <p className="font-script text-3xl text-accent">Archive</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Clinical cases</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#gallery" aria-label="Scroll to gallery">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
