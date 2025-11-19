import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosW100 = (props: IIcon) => {

  return (
    <Icon
      name='IosW100'

      short_name='Ios'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M183-614v-40h40v40h-40Zm6 308v-228h28v228h-28Zm120 0v-348h188v348H309Zm28-28h132v-292H337v292Zm252 28v-28h160v-132H589v-188h188v28H617v132h160v188H589Z"/>
    </Icon>
  );
};

IconMaterialIosW100.displayName = 'OnesyIconMaterialIosW100';

export default IconMaterialIosW100;
