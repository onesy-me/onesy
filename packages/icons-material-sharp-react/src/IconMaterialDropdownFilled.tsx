import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDropdownFilled = (props: IIcon) => {

  return (
    <Icon
      name='DropdownFilled'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440h280v-280H440v280ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
};

IconMaterialDropdownFilled.displayName = 'OnesyIconMaterialDropdownFilled';

export default IconMaterialDropdownFilled;
