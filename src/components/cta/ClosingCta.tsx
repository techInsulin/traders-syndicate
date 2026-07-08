import React from "react"
import PrimaryButton, { ButtonType } from "../buttons/PrimaryButton"

const ClosingCta = () => {
  return (
    <div className="bg-[url('/images/cta.png')] bg-no-repeat bg-cover rounded-md w-full md:w-3/4 h-[580px] md:h-96 flex flex-col items-center justify-around md:justify-center py-8 md:py-0 md:space-y-8">
      <h2 className="hidden md:block text-5xl font-semibold text-center leading-[1.15]">
        Become a Traders Syndicate <br />
        Elite Trader
      </h2>

      <h2 className="md:hidden text-5xl font-semibold text-center leading-[1.15]">
        Become a Traders Syndicate <br />
        Elite <br />
        Trader
      </h2>

      <div className="">
        <PrimaryButton
          buttonColor={ButtonType.primary}
          text="Join Our Discord"
          textCapitalized
        />
      </div>
    </div>
  )
}

export default ClosingCta
