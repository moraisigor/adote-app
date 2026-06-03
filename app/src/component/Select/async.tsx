import { FunctionComponent } from 'react'

import AsyncSelect from 'react-select/async'

type SelectAsyncProps = {
  multi?: boolean
  options: (search: string) => Promise<
    {
      value: string
      label: string
    }[]
  >
}

export const SelectAsync: FunctionComponent<SelectAsyncProps> = ({
  multi = false,
  options,
  ...props
}: SelectAsyncProps) => {
  return (
    <AsyncSelect
      {...props}
      isMulti={multi}
      loadOptions={options}
    />
  )
}
