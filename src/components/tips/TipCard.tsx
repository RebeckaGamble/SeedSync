import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TipIcon from "@/components/icons/TipIcon";
import type { Tip } from "@/types/tip";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useTranslation } from "react-i18next";

export const TipCard = ({
  tip,
  showIcon = true,
  showFullContent = true,
  showTags = true,
  className,
}: {
  tip: Tip;
  showIcon?: boolean;
  showFullContent?: boolean;
  showTags?: boolean;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const hasImage = !!tip.image;
  const hasIcon = showIcon && tip.cardIcon;

  return (
    <Card
      className={`${className} border-border flex flex-col w-full h-full shadow-lg `}
    >
      <CardHeader className="flex flex-row items-center gap-4 pb-2 h-[90px]">
        {hasImage && (
          <img
            src={tip.image}
            alt={tip.cardTitle}
            className="h-10 w-12 mb-0 rounded object-cover"
          />
        )}
        {hasIcon && !hasImage && <TipIcon icon={tip.cardIcon!} />}
        <CardTitle className="text-xl">{tip.cardTitle}</CardTitle>
      </CardHeader>
      <div className="flex flex-col h-full justify-between">
        <CardContent>
          <CardDescription className="text-base">
            {tip.cardDescription}
          </CardDescription>

          {showFullContent && tip.fullContent && (
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="mt-4"
            >
              <CollapsibleContent className="text-sm sm:text-[16px] text-secondary-foreground mt-2">
                {tip.fullContent}
              </CollapsibleContent>

              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`mt-3 flex items-center ${
                    !isOpen ? "text-green" : "text-border"
                  } hover:green-hover p-0 h-auto`}
                  aria-label={t("tips.readMoreBtnAriaLabel")}
                >
                  {isOpen ? "Show less" : "Read more"}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          )}
        </CardContent>
        {showTags && tip.tags && (
          <CardFooter className="relative h-auto w-full flex flex-wrap gap-1">
            {tip.tags.map((tag, index) => (
              <p
                key={index}
                className="bg-border/30 px-2 py-0.5 rounded-md border-border text-primary-foreground"
              >
                #{tag}
              </p>
            ))}
          </CardFooter>
        )}
      </div>
    </Card>
  );
};
