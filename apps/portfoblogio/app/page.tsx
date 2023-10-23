import cn from '@/common-functionalities/cn';
import Button from '@/design-system/Button';
import SvgHome from '@/illustrations/Home';
import SvgArrowBottomLeft from '@/static-icons/ArrowBottomLeft';
import SvgArrowBottomRight from '@/static-icons/ArrowBottomRight';
import SvgArrowDown from '@/static-icons/ArrowDown';
import SvgArrowLeft from '@/static-icons/ArrowLeft';
import SvgArrowLoop from '@/static-icons/ArrowLoop';
import SvgArrowRight from '@/static-icons/ArrowRight';
import SvgArrowTopLeft from '@/static-icons/ArrowTopLeft';
import SvgArrowTopRight from '@/static-icons/ArrowTopRight';
import SvgArrowUp from '@/static-icons/ArrowUp';
import SvgChevronDown from '@/static-icons/ChevronDown';
import SvgChevronLeft from '@/static-icons/ChevronLeft';
import SvgChevronRight from '@/static-icons/ChevronRight';
import SvgChevronUp from '@/static-icons/ChevronUp';
import SvgDoubleArrowLoop from '@/static-icons/DoubleArrowLoop';
import SvgDoubleChevronDown from '@/static-icons/DoubleChevronDown';
import SvgDoubleChevronLeft from '@/static-icons/DoubleChevronLeft';
import SvgDoubleChevronRight from '@/static-icons/DoubleChevronRight';
import SvgDoubleChevronUp from '@/static-icons/DoubleChevronUp';
import SvgMiniChevronDown from '@/static-icons/MiniChevronDown';
import SvgMiniChevronLeft from '@/static-icons/MiniChevronLeft';
import SvgMiniChevronRight from '@/static-icons/MiniChevronRight';
import SvgMiniChevronUp from '@/static-icons/MiniChevronUp';

export default async function Index() {
  return (
    <div>
      <div className="flex flex-wrap gap-2 [&>*]:shrink-0 [&>*]:w-8 [&>*]:h-8 text-blue-500">
        <SvgChevronDown />
        <SvgChevronLeft />
        <SvgChevronRight />
        <SvgChevronUp />
        <SvgDoubleChevronDown />
        <SvgDoubleChevronLeft />
        <SvgDoubleChevronRight />
        <SvgDoubleChevronUp />
        <SvgMiniChevronDown />
        <SvgMiniChevronLeft />
        <SvgMiniChevronRight />
        <SvgMiniChevronUp />
        <SvgArrowDown />
        <SvgArrowLeft />
        <SvgArrowRight />
        <SvgArrowUp />
        <SvgArrowTopLeft />
        <SvgArrowTopRight />
        <SvgArrowBottomLeft />
        <SvgArrowBottomRight />
        <SvgArrowLoop />
        <SvgDoubleArrowLoop />
        <SvgHome />
      </div>
      <div className="flex-wrap flex gap-4 my-5 items-end justify-center">
        <Button
          mobile={{ size: 'tiny' }}
          className={cn('bg-blue-300')}
          startIcon={<div className="rounded-full bg-red-600" />}
          endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
        <Button
          mobile={{ size: 'small' }}
          className={cn('bg-blue-300')}
          startIcon={<div className="rounded-full bg-red-600" />}
          endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
        <Button
          mobile={{ size: 'normal' }}
          className={cn('bg-blue-300')}
          startIcon={<div className="rounded-full bg-red-600" />}
          endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
        <Button
          mobile={{ size: 'medium' }}
          className={cn('bg-blue-300')}
          startIcon={<div className="rounded-full bg-red-600" />}
          endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
        <Button
          mobile={{ size: 'large' }}
          className={cn('bg-blue-300')}
          startIcon={<div className="rounded-full bg-red-600" />}
          endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
        <Button
          mobile={{ size: 'huge' }}
          className={cn('bg-blue-300 w-[300px]')}
          // startIcon={<div className="rounded-full bg-red-600 w-1/2 h-1/2 m-auto" />}
          // endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
      </div>
      <div className="my-5">
        <Button
          mobile={{ size: 'huge' }}
          tablet={{ size: 'large', shape: 'rectangle' }}
          desktop={{ size: 'normal', shape: 'rounded' }}
          className={cn('bg-blue-300 w-10/12')}
          startIcon={<div className="rounded-full bg-red-600 w-1/2 h-1/2 m-auto" />}
          endIcon={<SvgArrowRight />}
        >
          click here
        </Button>
      </div>
      <p className="line-clamp-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, magnam? Provident animi
        praesentium sint magni, repellat consequuntur quidem expedita, ducimus rerum ad quod
        aspernatur dolorum, reprehenderit eveniet quae autem debitis dolor cum fugit incidunt
        veritatis non! Ut placeat non rerum eum distinctio voluptas similique nostrum? Doloremque,
        quaerat magni enim consectetur eum perferendis. Consectetur nam architecto deleniti magnam
        perspiciatis magni, laboriosam necessitatibus, veniam cumque obcaecati aspernatur placeat
        totam hic consequuntur adipisci minus unde, ea rerum quo doloremque praesentium. Commodi
        mollitia iusto est unde consectetur labore delectus officia accusamus dolores sapiente, quod
        fugit doloremque obcaecati eos debitis beatae, laudantium, sint dicta! Iste.
      </p>
    </div>
  );
}
