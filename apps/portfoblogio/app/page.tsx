import {
  ArrowBottomLeft,
  ArrowBottomRight,
  ArrowDown,
  ArrowLeft,
  ArrowLoop,
  ArrowRight,
  ArrowTopLeft,
  ArrowTopRight,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  DoubleArrowLoop,
  DoubleChevronDown,
  DoubleChevronLeft,
  DoubleChevronRight,
  DoubleChevronUp,
  MiniChevronDown,
  MiniChevronLeft,
  MiniChevronRight,
  MiniChevronUp,
} from '@nhnghia/static-icons';

export default async function Index() {
  return (
    <div className="flex gap-2 [&>*]:shrink-0 [&>*]:w-8 [&>*]:h-8 text-blue-500">
      <ChevronDown />
      <ChevronLeft />
      <ChevronRight />
      <ChevronUp />
      <DoubleChevronDown />
      <DoubleChevronLeft />
      <DoubleChevronRight />
      <DoubleChevronUp />
      <MiniChevronDown />
      <MiniChevronLeft />
      <MiniChevronRight />
      <MiniChevronUp />
      <ArrowDown />
      <ArrowLeft />
      <ArrowRight />
      <ArrowUp />
      <ArrowTopLeft />
      <ArrowTopRight />
      <ArrowBottomLeft />
      <ArrowBottomRight />
      <ArrowLoop />
      <DoubleArrowLoop />
    </div>
  );
}
