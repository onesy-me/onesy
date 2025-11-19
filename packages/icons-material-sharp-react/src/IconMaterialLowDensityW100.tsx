import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLowDensityW100 = (props: IIcon) => {

  return (
    <Icon
      name='LowDensityW100'

      short_name='LowDensity'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-328h28v300h560v-560H460v-28h328v616H172Zm0-432v-40h40v40h-40Zm0-144v-40h40v40h-40Zm144 288v-40h40v40h-40Zm0-288v-40h40v40h-40Zm144 288v-40h40v40h-40Zm0-144v-40h40v40h-40Z"/>
    </Icon>
  );
};

IconMaterialLowDensityW100.displayName = 'OnesyIconMaterialLowDensityW100';

export default IconMaterialLowDensityW100;
