import LeftMenu from '@/components/Navigation/LeftMenu';
import { TopMenu } from '@/components/Navigation/TopMenu';

export default function contenidoLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const loading = true;
  return (
    <div className='flex transition-all h-full'>
            <div className={`overlay ${loading ? 'block' : 'hidden'}`}></div>
            <div>
                <LeftMenu />
            </div>
            <div className=' w-full bg-white content-size'>
                <TopMenu />
                <div className=' m-8'>
                    <main>{children}</main>
                </div>
            </div>
        </div>
  )
}