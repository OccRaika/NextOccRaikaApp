import LeftMenu from '@/components/Navigation/LeftMenu';
import TopNav from '@/components/Navigation/TopNav';

export default function contenidoLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const loading = true;
  return (
    <div className='flex transition-all'>
            <div className={`overlay ${loading ? 'block' : 'hidden'}`}></div>
            <div>
                <LeftMenu />
            </div>
            <div className=' w-full bg-white content-size'>
                <TopNav />
                <div className=' m-8'>
                    <main>{children}</main>
                </div>
            </div>
        </div>
  )
}