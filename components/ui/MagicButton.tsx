import React from 'react'

type MagicButtonProps = {
    title:string,
    icon: React.ReactNode,
    position:string,
    handleClick?: ()=>void,
    otherClasses?:string
}

const MagicButton = ({title, icon, position, handleClick, otherClasses}: MagicButtonProps  ) => {
  return (
    <div>
      <button className="md:w-60 md:mt-10 relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] " >
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className={`${otherClasses} inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4  text-sm font-medium text-white backdrop-blur-3xl`}>
    {position === "left" && <span className="mr-2">{icon}</span>}
    {title}
    {position === "right" && <span className="ml-2">{icon}</span>}
  </span>
</button>
    </div>
  )
}

export default MagicButton
