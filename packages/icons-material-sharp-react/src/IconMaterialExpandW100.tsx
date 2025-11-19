import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExpandW100 = (props: IIcon) => {

  return (
    <Icon
      name='ExpandW100'

      short_name='Expand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-132v-28h588v28H186Zm294-88L356-344l20-20 90 90v-412l-90 90-20-20 124-124 124 124-20 20-90-90v412l90-90 20 20-124 124ZM186-800v-28h588v28H186Z"/>
    </Icon>
  );
};

IconMaterialExpandW100.displayName = 'OnesyIconMaterialExpandW100';

export default IconMaterialExpandW100;
