import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChipExtraction = (props: IIcon) => {

  return (
    <Icon
      name='ChipExtraction'

      short_name='ChipExtraction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840v80q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200v80Zm160-160-56-57 103-103H360v-80h327L584-624l56-56 200 200-200 200Z"/>
    </Icon>
  );
};

IconMaterialChipExtraction.displayName = 'OnesyIconMaterialChipExtraction';

export default IconMaterialChipExtraction;
