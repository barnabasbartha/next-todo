'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import {
  UserGroupIcon,
  BellIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    name: 'Easy to Use',
    description:
      'A simple and clear interface that anyone can use to organize daily tasks, big or small.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Share with Others',
    description:
      'Collaborate with family, friends, or coworkers. Share lists and work together in real time.',
    icon: UserGroupIcon,
  },
  {
    name: 'Smart Reminders',
    description:
      'Never forget important things again. Get helpful reminders for your tasks and events.',
    icon: BellIcon,
  },
  {
    name: 'Access Anywhere',
    description:
      'Use Next To-Do on your phone, tablet, or computer. Your lists are always with you.',
    icon: DevicePhoneMobileIcon,
  },
];

export default function Index() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        'Next To-Do',
        'a collaborative task manager',
        'a modern productivity planner',
        'a lightning-fast checklist app',
        'a multi-user task board',
        'a real-time to-do system',
        'a next-gen action tracker',
        'a robust task-sharing tool',
      ],
      typeSpeed: 50,
      showCursor: true,
      loop: true,
      shuffle: false,
      backSpeed: 20,
      smartBackspace: true,
      backDelay: 2000,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-screen">
        <div className="absolute inset-0">
          <Image
            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1011%26quot%3b)'%3e%3c/rect%3e%3cpath d='M818.5976081676282 444.65609907771767L886.6113643351684 541.9871008927983 932.113176783114 448.694560031955z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M469.84 484.99 a163.52 163.52 0 1 0 327.04 0 a163.52 163.52 0 1 0 -327.04 0z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1095.009%2c297.933C1140.977%2c296.203%2c1186%2c278.063%2c1209.122%2c238.295C1232.355%2c198.335%2c1228.447%2c148.741%2c1204.866%2c108.986C1181.777%2c70.062%2c1140.082%2c49.995%2c1095.009%2c45.916C1039.579%2c40.9%2c974.485%2c38.639%2c944.315%2c85.409C912.673%2c134.461%2c931.223%2c199.864%2c964.986%2c247.481C993.807%2c288.127%2c1045.217%2c299.806%2c1095.009%2c297.933' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M236.0148860640721 350.44380651954026L187.83978038212163 424.62696388724066 262.022937749822 472.80206956919113 310.1980434317725 398.61891220149073z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1157.954%2c265.177C1213.83%2c268.657%2c1277.482%2c257.335%2c1303.828%2c207.938C1329.334%2c160.116%2c1296.238%2c106.395%2c1266.969%2c60.779C1240.859%2c20.086%2c1206.245%2c-17.049%2c1157.954%2c-19.409C1105.77%2c-21.96%2c1054.192%2c3.49%2c1028.774%2c49.136C1003.939%2c93.734%2c1014.29%2c147.726%2c1040.487%2c191.538C1065.907%2c234.05%2c1108.518%2c262.098%2c1157.954%2c265.177' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M843.0945098960876 56.234879204428864L853.8730005687974 180.80077053466658 944.4843696016022 119.68263039928749z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1134.79 172.27 a168.63 168.63 0 1 0 337.26 0 a168.63 168.63 0 1 0 -337.26 0z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M781.694%2c527.044C825.571%2c526.907%2c874.742%2c519.402%2c895.43%2c480.708C915.444%2c443.275%2c892.635%2c399.823%2c868.318%2c365.03C848.143%2c336.163%2c816.82%2c320.531%2c781.694%2c317.972C740.252%2c314.953%2c693.961%2c316.602%2c670.055%2c350.588C643.154%2c388.831%2c641.724%2c441.908%2c666.723%2c481.421C690.35%2c518.766%2c737.503%2c527.182%2c781.694%2c527.044' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M792.637%2c411.175C830.286%2c411.775%2c858.192%2c381.386%2c878.004%2c349.365C899.265%2c315.002%2c918.768%2c273.896%2c899.574%2c238.338C879.743%2c201.6%2c834.386%2c191.264%2c792.637%2c191.22C750.792%2c191.176%2c704.598%2c200.979%2c685.307%2c238.112C666.893%2c273.558%2c690.803%2c312.772%2c711.855%2c346.718C731.315%2c378.096%2c755.72%2c410.587%2c792.637%2c411.175' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M23.017275910862907 261.71627924218745L56.67816065947407 408.1541631200094 154.28880953132384 320.2651401092595z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M158.896%2c366.253C197.01%2c364.749%2c225.818%2c335.935%2c244.796%2c302.847C263.658%2c269.961%2c275.123%2c229.923%2c255.799%2c197.306C236.747%2c165.147%2c196.232%2c156.063%2c158.896%2c157.855C124.973%2c159.483%2c95.314%2c177.377%2c76.867%2c205.893C56.39%2c237.547%2c43.225%2c276.559%2c60.394%2c310.123C78.84%2c346.183%2c118.423%2c367.85%2c158.896%2c366.253' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1127.9377537350038 537.2814112685455L1203.2270011291575 637.1936171466554 1303.1392070072675 561.9043697525015 1227.8499596131137 461.9921638743916z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M193.99 189.49 a127.74 127.74 0 1 0 255.48 0 a127.74 127.74 0 1 0 -255.48 0z' fill='rgba(32%2c 98%2c 168%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='-39.29%25' x2='15.28%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1011'%3e%3cstop stop-color='rgba(0%2c 89%2c 138%2c 1)' offset='0.24'%3e%3c/stop%3e%3cstop stop-color='rgba(2%2c 43%2c 96%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"
            alt="Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
            <span>Welcome to </span>
            <span ref={typedEl}></span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl text-center">
            The most efficient way to manage your tasks and boost your
            productivity shared with your friends real-time.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/boards"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Sign in
            </Link>
            <Link
              href="/boards"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Feature Section */}{' '}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Next To-Do helps you stay organized, share your lists, and never
              miss a thing. Simple, friendly, and made for everyone.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>
                      Next To-Do makes it so easy to keep track of everything I
                      need to do. I love how simple and clear it is!
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src="/images/testimonials/sarah.avif"
                      alt="Sarah"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Sarah</div>
                      <div className="text-gray-600">@sarahj</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>
                      Staying organized has never been easier. I can share my
                      lists with family and friends, and everyone stays on the
                      same page.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src="/images/testimonials/michael.avif"
                      alt="Michael"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Michael</div>
                      <div className="text-gray-600">@michaelc</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>
                      It helps me remember important things and get more done
                      every day. The reminders are super helpful!
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src="/images/testimonials/emily.avif"
                      alt="Emily"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Emily</div>
                      <div className="text-gray-600">@emilyr</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>
                      I love how I can use Next To-Do on my phone and computer.
                      It keeps my tasks in sync wherever I am.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src="/images/testimonials/david.avif"
                      alt="David"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">David</div>
                      <div className="text-gray-600">@davidw</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>
                      My family uses Next To-Do to plan our groceries and chores
                      together. It makes teamwork so much easier!
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src="/images/testimonials/thomas.avif"
                      alt="Thomas"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Thomas</div>
                      <div className="text-gray-600">@thomasb</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>
                      With Next To-Do, I never forget anything important.
                      It&apos;s simple, fast, and perfect for my busy life.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src="/images/testimonials/lisa.avif"
                      alt="Lisa"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Lisa</div>
                      <div className="text-gray-600">@lisaa</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-sky-50">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Boost your productivity today.
              <br />
              Start using Next To-Do.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-900">
              Join thousands of brilliant people who are already using Next
              To-Do to manage their tasks and boost their productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/boards"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Sign in
              </Link>
              <Link
                href="/boards"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900">Next To-Do</h2>
              <p className="text-gray-500 text-base">
                Next generation task management simple and efficient for
                everyone.
              </p>
              <div className="flex space-x-6">
                {/* Social Links */}
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Product
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 Next To-Do. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
