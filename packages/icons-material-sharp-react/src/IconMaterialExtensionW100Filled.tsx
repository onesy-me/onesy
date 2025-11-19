import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionW100Filled = (props: IIcon) => {

  return (
    <Icon
      name='ExtensionW100Filled'

      short_name='Extension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-172H172v-188q30-13 49-40t19-60q0-33-19-60t-49-40v-188h188q14-32 40.5-50t59.5-18q33 0 59.5 18t40.5 50h188v188q32 14 50 40.5t18 59.5q0 33-18 59.5T748-360v188H560q-14-32-41-50t-59-18q-32 0-59 18t-41 50Z"/>
    </Icon>
  );
};

IconMaterialExtensionW100Filled.displayName = 'OnesyIconMaterialExtensionW100Filled';

export default IconMaterialExtensionW100Filled;
