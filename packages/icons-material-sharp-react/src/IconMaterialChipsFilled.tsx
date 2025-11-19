import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChipsFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChipsFilled'

      short_name='Chips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440h400v-80H280v80ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialChipsFilled.displayName = 'OnesyIconMaterialChipsFilled';

export default IconMaterialChipsFilled;
