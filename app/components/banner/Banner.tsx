import cross from '~/assets/icons/x-mark.svg'

interface BannerProps {
  onClose: VoidFunction
}

export const Banner = ({ onClose }: BannerProps) => {
  return (
    <div className="relative flex min-h-10 items-center justify-center bg-primary">
      <p className="text-xs text-white">
        Discount 20% For New Member,{' '}
        <span className="font-bold">ONLY FOR TODAY!!</span>
      </p>
      <button
        className="absolute right-[10px] border-none outline-none hover:cursor-pointer hover:brightness-90"
        onClick={onClose}
      >
        <img src={cross} alt="cross-icon" />
      </button>
    </div>
  )
}
