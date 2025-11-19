import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTrendingFlat = (props: IIcon) => {

  return (
    <Icon
      name='TrendingFlat'

      short_name='TrendingFlat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3l4-4z"/>
    </Icon>
  );
};

IconMaterialTrendingFlat.displayName = 'OnesyIconMaterialTrendingFlat';

export default IconMaterialTrendingFlat;
