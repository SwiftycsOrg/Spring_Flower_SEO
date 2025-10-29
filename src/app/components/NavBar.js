'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/plan', label: 'Plan' },
  { href: '/about', label: 'About' }
]

const solutions = [
  'All',
  'Marketing',
  'Sales',
  'Product',
  'Operation',
  'Finance'
]
const solutions2 = [
  
  {title: 'AI Training for Business Excellence', link: 'aitrainingforbusiness'},
  {title: 'Data Science Training', link: 'datasciencetraining'},

]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dropdownOpen2, setDropdownOpen2] = useState(false)
  const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false)
  const [dropdownOpenMobile2, setDropdownOpenMobile2] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const menuVariants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.18, when: 'beforeChildren', staggerChildren: 0.03 }
    },
    exit: { opacity: 0, y: 6, scale: 0.98, transition: { duration: 0.12 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 500, damping: 30 } }
  }

  const ddRef = useRef(null)
  useEffect(() => {
    const onClick = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 shadow-[0_1px_10px_rgba(0,0,0,0.06)]">
      <nav className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between   h-20 ">
          <Link href="/" className="flex items-center gap-3" aria-label="Swiftycs Home">
            <Image src="/logo.png" alt="Swiftycs Logo" width={160} height={44} className="rounded-md mr-0.5 lg:w-[200px]" />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <ul className="relative flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-gray-800 hover:text-cyan-600 transition-colors px-1 py-2"
                    onMouseEnter={() => setActive(link.href)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {link.label}
                    <AnimatePresence>
                      {active === link.href && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-cyan-500"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              ))}

              <li ref={ddRef} className="relative">
                <button
                  onMouseEnter={() => setDropdownOpen2(true)}
                  onFocus={() => setDropdownOpen2(true)}
                  onMouseLeave={() => setDropdownOpen2(false)}
                  className="text-[15px] font-semibold text-gray-900 hover:text-cyan-600 flex items-center gap-1 px-1 py-2"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen2}
                >
                  Swiftycs Academy
                  <motion.svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: dropdownOpen2 ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen2 && (
                    <motion.div
                      key="dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      onMouseEnter={() => setDropdownOpen2(true)}
                      onMouseLeave={() => setDropdownOpen2(false)}
                      className="absolute left-[-30px] mt-2  w-[280px]  rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur p-2 shadow-xl"
                      role="menu"
                    >
                      {solutions2.map((item) => (
                        <motion.div key={item.link} variants={itemVariants}>
                          <Link
                            href={`/swiftycsacademy/${item.link}`}
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
                            role="menuitem"
                          >
                            {item.title}
                            <motion.span
                              aria-hidden
                              initial={{ opacity: 0, x: -6 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="text-xs"
                            >
                              →
                            </motion.span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li ref={ddRef} className="relative">
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  onFocus={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="text-[15px] font-semibold text-gray-900 hover:text-cyan-600 flex items-center gap-1 px-1 py-2"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen}
                >
                  Solutions & Services
                  <motion.svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      key="dropdown"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={dropdownVariants}
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="absolute left-0 mt-2 w-56 rounded-2xl border border-gray-200/60 bg-white/90 backdrop-blur p-2 shadow-xl"
                      role="menu"
                    >
                      {solutions.map((item) => (
                        <motion.div key={item} variants={itemVariants}>
                          <Link
                          
                            href={`/solutions/${encodeURIComponent(item)}`}
                            className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
                            role="menuitem"
                          >
                            {item}
                            <motion.span
                              aria-hidden
                              initial={{ opacity: 0, x: -6 }}
                              whileHover={{ opacity: 1, x: 0 }}
                              className="text-xs"
                            >
                              →
                            </motion.span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            <div className="flex items-center gap-3">
               <motion.div
      whileHover="hover"
      className="inline-block"
    >
      <Link
        onClick={()=>setOpen(false)}
        href="/get-started"
        className="group relative inline-flex items-center gap-2 rounded-xl   border-2 border-cyan-400 px-4 py-2 text-[15px] font-semibold text-cyan-600 overflow-hidden"
      >
        <motion.span
          className="absolute inset-0 bg-cyan-400"
          initial={{ x: "100%" }}
          variants={{
            hover: { x: 0 }
          }}
          transition={{ type: "tween", duration: 0.25 }}
        />
        <span className="relative z-10 group-hover:text-white">
        Request s Demo
        </span>
      </Link>
    </motion.div>
              <Link onClick={()=>setOpen(false)} href="https://uae.ai.swiftycs.com" className="text-[15px] font-medium text-gray-800 hover:text-cyan-600">
                Login
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-7 w-7"
                initial={false}
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden mb-4 w-full"
            >
              <div className="">
                <div className="space-y-1">
                  {navLinks.map((l) => (
                    <Link onClick={()=>setOpen(false)} key={l.href} href={l.href} className="block rounded-xl px-3 py-2 text-base font-medium hover:bg-gray-50">
                      {l.label}
                    </Link>
                  ))}

                  <details className="group rounded-xl">
                    <summary
                    onClick={() => setDropdownOpenMobile((v) => !v)}
                    className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2 text-base font-semibold hover:bg-gray-50">
                      Solutions & Services
                      <span>
<svg viewBox="0 0 24 24" width="16" height="16"
     style={{ transition: "transform .16s", transform: dropdownOpenMobile ? "rotate(-90deg)" : "rotate(0deg)" }}>
  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
</svg>
                      </span>
                    </summary>
                    <div className="pl-2">
                      {solutions.map((item) => (
                        <Link key={item} href={`/solutions/${encodeURIComponent(item)}`} onClick={()=>setOpen(false)} className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </details>
                  <details className="group rounded-xl">
                    <summary
                    onClick={() => setDropdownOpenMobile2((v) => !v)}
                    className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-2 text-base font-semibold hover:bg-gray-50">
                      Swiftycs Academy
                      <span>
<svg viewBox="0 0 24 24" width="16" height="16"
     style={{ transition: "transform .16s", transform: dropdownOpenMobile2 ? "rotate(-90deg)" : "rotate(0deg)" }}>
  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
</svg>
                      </span>
                    </summary>
                    <div className="pl-2">
                      {solutions2.map((item) => (
                        <Link key={item.link} onClick={()=>setOpen(false)}  href={`/swiftycsacademy/${item.link}`} className="block rounded-xl px-3 py-2 text-sm hover:bg-gray-50">
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </details>

                  <Link href="/get-started" onClick={()=>setOpen(false)} className="mt-1 block w-full rounded-s-sm     bg-cyan-500 px-3 py-2 text-center text-base font-semibold text-white">
                    Request s Demo
                  </Link>
                  <Link href="https://uae.ai.swiftycs.com" className="block rounded-xl px-3 py-2 text-base font-medium">
                    Login
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
