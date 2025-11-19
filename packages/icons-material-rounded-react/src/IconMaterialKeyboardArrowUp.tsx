import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyboardArrowUp = (props: IIcon) => {

  return (
    <Icon
      name='KeyboardArrowUp'

      short_name='KeyboardArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-528 324-372q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-528Z"/>
    </Icon>
  );
};

IconMaterialKeyboardArrowUp.displayName = 'OnesyIconMaterialKeyboardArrowUp';

export default IconMaterialKeyboardArrowUp;
