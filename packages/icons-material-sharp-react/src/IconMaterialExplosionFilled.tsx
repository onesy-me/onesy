import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExplosionFilled = (props: IIcon) => {

  return (
    <Icon
      name='ExplosionFilled'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-281 59-59h81v-81l59-59-59-59v-81h-81l-59-59-59 59h-81v81l-59 59 59 59v81h81l59 59Zm0 253L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Z"/>
    </Icon>
  );
};

IconMaterialExplosionFilled.displayName = 'OnesyIconMaterialExplosionFilled';

export default IconMaterialExplosionFilled;
