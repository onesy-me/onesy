import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddCallFilled = (props: IIcon) => {

  return (
    <Icon
      name='AddCallFilled'

      short_name='AddCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-520v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm158 400q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42Z"/>
    </Icon>
  );
};

IconMaterialAddCallFilled.displayName = 'OnesyIconMaterialAddCallFilled';

export default IconMaterialAddCallFilled;
