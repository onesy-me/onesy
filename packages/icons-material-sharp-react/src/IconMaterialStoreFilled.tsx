import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStoreFilled = (props: IIcon) => {

  return (
    <Icon
      name='StoreFilled'

      short_name='Store'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Z"/>
    </Icon>
  );
};

IconMaterialStoreFilled.displayName = 'OnesyIconMaterialStoreFilled';

export default IconMaterialStoreFilled;
