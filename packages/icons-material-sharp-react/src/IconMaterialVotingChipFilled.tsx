import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVotingChipFilled = (props: IIcon) => {

  return (
    <Icon
      name='VotingChipFilled'

      short_name='VotingChip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm10-160h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm290 0h60v-240H560v60h60v180Z"/>
    </Icon>
  );
};

IconMaterialVotingChipFilled.displayName = 'OnesyIconMaterialVotingChipFilled';

export default IconMaterialVotingChipFilled;
