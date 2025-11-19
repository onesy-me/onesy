import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlayForWork = (props: IIcon) => {

  return (
    <Icon
      name='PlayForWork'

      short_name='PlayForWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/>
    </Icon>
  );
};

IconMaterialPlayForWork.displayName = 'OnesyIconMaterialPlayForWork';

export default IconMaterialPlayForWork;
