import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronLeft = (props: IIcon) => {

  return (
    <Icon
      name='ChevronLeft'

      short_name='ChevronLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/>
    </Icon>
  );
};

IconMaterialChevronLeft.displayName = 'OnesyIconMaterialChevronLeft';

export default IconMaterialChevronLeft;
