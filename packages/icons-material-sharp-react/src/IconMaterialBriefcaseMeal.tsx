import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBriefcaseMeal = (props: IIcon) => {

  return (
    <Icon
      name='BriefcaseMeal'

      short_name='BriefcaseMeal'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80ZM160-200v-440 440Zm0 0h160v-120q-26-6-43-27.5T260-397v-163h40v151h30v-151h40v151h30v-151h40v163q0 28-17 49.5T380-320v120h200v-88q-26-15-43-50.5T520-420q0-58 26-99t64-41q37 0 63.5 41t26.5 99q0 47-17 82.5T640-288v88h160v-440H160v440Z"/>
    </Icon>
  );
};

IconMaterialBriefcaseMeal.displayName = 'OnesyIconMaterialBriefcaseMeal';

export default IconMaterialBriefcaseMeal;
