import Image from 'next/image'
import NavigationMenu from './nav-menu'

export default function Footer({ menuItems }) {
  return (
    <footer id="colophon" className="site-footer bg-light py-8 md:p-16 text-secondary" role="contentinfo">
    <div className="container mx-auto max-w-content">
      <div className="flex flex-col md:flex-row gap-4 mb-8 place-content-between">
        <div className="basis-1/4">
          <div className="max-w-[160px] mb-4">
          <Image src="/My-Automated-House-Logo-2.png" alt="DK Smarthome - Logo" width={160}  height={59} ></Image>
          </div>
        </div>
        <div className="basis-1/3">
          <p className="footer-header">Useful Links</p>
          <NavigationMenu hidden={false} menuItems={menuItems} textColor="secondary" />
        </div>
        <div className="basis-1/3">
          <p className="footer-header">Contact</p>
          <p>E-mail: info@myautomatedhouse.com</p>
        </div>
      </div>
      <div>
        &copy; 2023 - My Automated House
      </div>
    </div>
  </footer>
  )
}
