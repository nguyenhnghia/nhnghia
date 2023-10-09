import Text from '@/design-system/Text';
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
      <Text HTMLTag="span" className="text-blue-300 text-3xl">
        text
      </Text>
      <Text HTMLTag="p" className="text-blue-300 text-5xl">
        paragraph
      </Text>
      <Text HTMLTag="h1" className="text-blue-300">
        heading1
      </Text>
      <Text HTMLTag="h2" className="text-blue-300">
        heading2
      </Text>
      <Text HTMLTag="h3" className="text-blue-300">
        heading3
      </Text>
      <Text HTMLTag="h4" className="text-blue-300">
        heading4
      </Text>
    </div>
  );
}
