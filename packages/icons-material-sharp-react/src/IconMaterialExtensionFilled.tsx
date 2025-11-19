import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExtensionFilled = (props: IIcon) => {

  return (
    <Icon
      name='ExtensionFilled'

      short_name='Extension'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M352-120H120v-232q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-232h240q0-42 29-71t71-29q42 0 71 29t29 71h240v240q42 0 71 29t29 71q0 42-29 71t-71 29v240H568q0-50-31.5-85T460-240q-45 0-76.5 35T352-120Z"/>
    </Icon>
  );
};

IconMaterialExtensionFilled.displayName = 'OnesyIconMaterialExtensionFilled';

export default IconMaterialExtensionFilled;
