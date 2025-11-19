import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDoorBackFilled = (props: IIcon) => {

  return (
    <Icon
      name='DoorBackFilled'

      short_name='DoorBack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-80h80v-640h560v640h80v80H120Zm280-320q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Z"/>
    </Icon>
  );
};

IconMaterialDoorBackFilled.displayName = 'OnesyIconMaterialDoorBackFilled';

export default IconMaterialDoorBackFilled;
