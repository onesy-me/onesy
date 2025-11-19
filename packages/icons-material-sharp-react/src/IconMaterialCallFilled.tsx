import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallFilled = (props: IIcon) => {

  return (
    <Icon
      name='CallFilled'

      short_name='Call'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z"/>
    </Icon>
  );
};

IconMaterialCallFilled.displayName = 'OnesyIconMaterialCallFilled';

export default IconMaterialCallFilled;
