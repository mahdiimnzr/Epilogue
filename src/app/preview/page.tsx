import Button from "@/components/atoms/button/Button";
import ButtonOnlyIcon from "@/components/atoms/buttonOnlyIcon/buttonOnlyIcon";
import HomeLogo from "@/components/atoms/Logo/home-logo";
import SignButton from "@/components/atoms/Sign-button/signButton";
import { ArrowRight01Icon, User } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export default function ComponentsPreview() {
    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <h1 className="mb-8 text-3xl font-bold">
                Components Preview
            </h1>

            <section className="mb-8 rounded-xl border bg-white p-6">
                <h2 className="mb-4 text-xl font-semibold">
                    Buttons
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary" size="md">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="tertiary">Tertiary</Button>

                </div>
            </section>

            <section className="mb-8 rounded-xl border bg-white p-6">
                <h2 className="mb-4 text-xl font-semibold">
                    Only Icon Buttons
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                    <ButtonOnlyIcon
                        size="sm"
                        hasIcon={false}
                    >
                        <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={24}
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                    </ButtonOnlyIcon>

                    <ButtonOnlyIcon
                        variant="secondary"
                        size="sm"
                        hasIcon={false}
                    >
                        <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={24}
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                    </ButtonOnlyIcon>

                    <ButtonOnlyIcon
                        variant="danger"
                        size="sm"
                        hasIcon={false}
                    >
                        <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={24}
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                    </ButtonOnlyIcon>

                    <ButtonOnlyIcon
                        variant="outline"
                        size="sm"
                        hasIcon={false}
                    >
                        <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={24}
                            color="currentColor"
                            strokeWidth={1.5}
                        />
                    </ButtonOnlyIcon>
                </div>
            </section>

            <section className="mb-8 rounded-xl border bg-white p-6">
                <h2 className="mb-4 text-xl font-semibold">
                    Sign Buttons
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                    <SignButton text="Google" />

                </div>
            </section>

            <section className="mb-8 rounded-xl border bg-white p-6">
                <h2 className="mb-4 text-xl font-semibold">
                    Home Logo
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                                   <HomeLogo />


                </div>
            </section>
        </main>
    );
}