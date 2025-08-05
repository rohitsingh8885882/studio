import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bed, HeartPulse, Mail, MapPin, Phone, Quote, Stethoscope, Syringe } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    icon: <Bed className="h-10 w-10 text-primary" />,
    name: 'Modular Operation Theaters',
    description: 'State-of-the-art, NABH-compliant modular OTs designed for efficiency and safety, featuring advanced air filtration and integrated systems.',
    price: 'Starting at ₹15,00,000',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'operating room',
  },
  {
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
    name: 'Intensive Care Units (ICU)',
    description: 'Custom-designed ICU setups with cutting-edge patient monitoring, life support systems, and infection control measures.',
    price: 'Starting at ₹25,00,000',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'hospital ICU',
  },
  {
    icon: <Syringe className="h-10 w-10 text-primary" />,
    name: 'Medical Gas Pipelines',
    description: 'End-to-end MGPS installation adhering to the highest safety standards, ensuring reliable delivery of medical gases.',
    price: 'Request a Quote',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'medical equipment',
  },
];

const testimonials = [
  {
    quote: "The professionalism and expertise of Genuine Hospi Enterprises were exceptional. They transformed our vision for a modern OT into reality, on time and within budget.",
    name: 'Dr. Anjali Sharma',
    title: 'Chief Surgeon, City General Hospital',
    logo: 'https://placehold.co/100x100.png',
    aiHint: 'hospital logo',
  },
  {
    quote: "Their attention to detail in our new ICU wing was remarkable. The quality of work and adherence to NABH standards is commendable. Our facility is now truly world-class.",
    name: 'Mr. Rajeev Mehta',
    title: 'Director, Sunshine Multispeciality Clinic',
    logo: 'https://placehold.co/100x100.png',
    aiHint: 'clinic logo',
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <HeartPulse className="h-7 w-7 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            Genuine Hospi
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#products" className="transition-colors hover:text-primary">Products</a>
          <a href="#about" className="transition-colors hover:text-primary">About Us</a>
          <a href="#testimonials" className="transition-colors hover:text-primary">Testimonials</a>
        </nav>
        <Button asChild style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
          <a href="#contact">Request a Consultation</a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
       <div aria-hidden="true" className="absolute inset-0 top-0 h-full w-full bg-background bg-dot-primary/20 [mask-image:radial-gradient(ellipse_at_top,transparent_10%,black)]"></div>
      <div className="container mx-auto max-w-7xl px-4 text-center md:px-6 relative">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Building the Future of Healthcare, <span className="text-primary">Together.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Genuine Hospi Enterprises delivers state-of-the-art, NABH-compliant hospital infrastructure. From concept to completion, we are your trusted partner in creating world-class medical facilities.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }} className="hover:bg-accent/90">
            <a href="#contact">Request a Consultation</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#products">Explore Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Top Products & Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide comprehensive solutions for modern hospital infrastructure.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
                data-ai-hint={product.aiHint}
              />
              <CardHeader className="flex-row items-center gap-4">
                {product.icon}
                <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="bg-muted/50 p-4">
                <p className="font-semibold text-foreground">{product.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Genuine Hospi Enterprises</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Established in November 2023, Genuine Hospi Enterprises provides comprehensive hospital setup solutions across India. Our expertise encompasses designing and building ICU and modular OT units that adhere to NABH compliance standards. This includes medical gas pipeline systems, oxygen and nitrous oxide manifolds, and complete plant installations.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our mission is to empower healthcare providers with facilities that enhance patient care, improve safety, and optimize operational efficiency.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Hospital interior"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
              data-ai-hint="hospital interior"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to have partnered with leading healthcare providers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-primary/50" />
                <blockquote className="mt-4 text-lg font-medium text-foreground">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="mt-6 flex items-center gap-4 p-0">
                <Avatar>
                  <AvatarImage src={testimonial.logo} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Ready to Elevate Your Healthcare Facility?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Let's discuss how we can help you achieve your goals. Contact us for a free, no-obligation consultation with our experts.
        </p>
        <div className="mt-8">
           <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
             <a href="tel:06207507418">Request a Consultation</a>
           </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-muted py-12">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <a href="#" className="flex items-center gap-2">
            <HeartPulse className="h-7 w-7 text-primary" />
            <span className="font-headline text-2xl font-bold text-foreground">Genuine Hospi</span>
          </a>
          <p className="mt-2 text-muted-foreground">Your partner in building world-class hospitals.</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-headline text-xl font-semibold text-foreground">Contact Information</h3>
          <div className="mt-4 space-y-3 text-muted-foreground">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
              <span>Bazaar, Pachrukhi, Siwan, Bihar 841241</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <a href="tel:06207507418" className="hover:text-primary">062075 07418</a>
            </div>
             <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <a href="mailto:contact@genuinehospi.com" className="hover:text-primary">contact@genuinehospi.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 max-w-7xl border-t px-4 pt-6 text-center text-sm text-muted-foreground md:px-6">
        <p>&copy; {new Date().getFullYear()} Genuine Hospi Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
