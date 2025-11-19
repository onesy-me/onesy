import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuOpenFilled = (props: IIcon) => {

  return (
    <Icon
      name='MenuOpenFilled'

      short_name='MenuOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"/>
    </Icon>
  );
};

IconMaterialMenuOpenFilled.displayName = 'OnesyIconMaterialMenuOpenFilled';

export default IconMaterialMenuOpenFilled;
