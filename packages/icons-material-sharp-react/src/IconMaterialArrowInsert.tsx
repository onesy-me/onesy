import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowInsert = (props: IIcon) => {

  return (
    <Icon
      name='ArrowInsert'

      short_name='ArrowInsert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M704-240 320-624v344h-80v-480h480v80H376l384 384-56 56Z"/>
    </Icon>
  );
};

IconMaterialArrowInsert.displayName = 'OnesyIconMaterialArrowInsert';

export default IconMaterialArrowInsert;
