import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRightAlt = (props: IIcon) => {

  return (
    <Icon
      name='ArrowRightAlt'

      short_name='ArrowRightAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"/>
    </Icon>
  );
};

IconMaterialArrowRightAlt.displayName = 'OnesyIconMaterialArrowRightAlt';

export default IconMaterialArrowRightAlt;
