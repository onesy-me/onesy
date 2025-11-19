import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndFilled = (props: IIcon) => {

  return (
    <Icon
      name='LineEndFilled'

      short_name='LineEnd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M780-380q-31 0-56-17t-36-43H80v-80h608q11-26 36-43t56-17q42 0 71 29t29 71q0 42-29 71t-71 29Z"/>
    </Icon>
  );
};

IconMaterialLineEndFilled.displayName = 'OnesyIconMaterialLineEndFilled';

export default IconMaterialLineEndFilled;
