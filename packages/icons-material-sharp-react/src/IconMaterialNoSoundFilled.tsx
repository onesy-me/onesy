import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoSoundFilled = (props: IIcon) => {

  return (
    <Icon
      name='NoSoundFilled'

      short_name='NoSound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m616-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-496-40v-240h160l200-200v640L280-360H120Z"/>
    </Icon>
  );
};

IconMaterialNoSoundFilled.displayName = 'OnesyIconMaterialNoSoundFilled';

export default IconMaterialNoSoundFilled;
