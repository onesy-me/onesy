import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowDropUp = (props: IIcon) => {

  return (
    <Icon
      name='ArrowDropUp'

      short_name='ArrowDropUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14l5-5 5 5H7z"/>
    </Icon>
  );
};

IconMaterialArrowDropUp.displayName = 'OnesyIconMaterialArrowDropUp';

export default IconMaterialArrowDropUp;
