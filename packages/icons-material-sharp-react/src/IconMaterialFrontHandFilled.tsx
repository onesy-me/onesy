import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontHandFilled = (props: IIcon) => {

  return (
    <Icon
      name='FrontHandFilled'

      short_name='FrontHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M500-40q-142 0-241-99t-99-241v-420h80v280h80v-360h80v360h80v-400h80v400h80v-320h80v270q-29 21-44.5 53T660-450v50h-50q-63 0-106.5 43.5T460-250v50h60v-50q0-38 26-64t64-26h110v-110q0-38 26-64t64-26h30v160q0 142-99 241T500-40Z"/>
    </Icon>
  );
};

IconMaterialFrontHandFilled.displayName = 'OnesyIconMaterialFrontHandFilled';

export default IconMaterialFrontHandFilled;
